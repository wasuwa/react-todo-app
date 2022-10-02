interface PathParams {
  [key: string]: string;
}

const apiPaths = {
  todos: '/todos',
} as PathParams;

export const getEndpoint = (pathName: string): string => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  if (typeof endpoint === 'undefined') {
    throw new Error('APIのエンドポイントが読み込めません');
  }

  const path = apiPaths[pathName];
  if (typeof path === 'undefined') {
    throw new Error('APIのパスが存在しません');
  }

  return endpoint + path;
};
