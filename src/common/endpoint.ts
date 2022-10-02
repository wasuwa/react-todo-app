interface PathParams {
  [key: string]: string | number;
}

const apiPaths = {
  todos: '/todos',
  deleteTodo: `/todos/{id}`,
} as const;

const needsParamsEmbedding = (path: string): boolean => {
  return path.search('{[A-Za-z]+}') >= 1;
};

const extractParamFromPath = (path: string): string[] => {
  const regex = /{[A-Za-z]+}/g;
  const params = path.match(regex) as string[];
  if (typeof params === null) {
    return [];
  }

  return params.map(param => {
    return param.replace(/{|}/g, '');
  });
};

const validateParams = (params: PathParams, paramNames: string[]): boolean => {
  const paramsKeys = Object.keys(params);
  return (
    paramsKeys.length === paramNames.length &&
    paramsKeys.every(paramKey => {
      return paramNames.includes(paramKey);
    })
  );
};

export const getEndpoint = (pathName: string, params?: PathParams): string => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  if (typeof endpoint === 'undefined') {
    throw new Error('APIのエンドポイントが読み込めません');
  }

  const paths = apiPaths as PathParams;
  const path = paths[pathName] as string;
  if (typeof path === 'undefined') {
    throw new Error('指定されたAPIのパスが存在しません');
  }

  if (!needsParamsEmbedding(path)) {
    return endpoint + path;
  }

  if (!params) {
    throw new Error('パラメータがありません');
  }
  const paramNames = extractParamFromPath(path);
  if (!paramNames.length) {
    throw new Error('パラメータ名が取得できません');
  }
  if (!validateParams(params, paramNames)) {
    throw new Error('パラメータが不正です');
  }

  let pathAfterReplace = path;
  paramNames.forEach(name => {
    pathAfterReplace = pathAfterReplace.replace(`{${name}}`, String(params[name]));
  });

  return endpoint + pathAfterReplace;
};
