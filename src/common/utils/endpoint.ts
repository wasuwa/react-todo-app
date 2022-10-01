interface PathParams {
  [key: string]: string;
}

const apiPaths = {
  todos: '/todos',
} as PathParams;

export const getEndpoint = (pathName: string): string => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  if (typeof endpoint !== 'string') return '';

  return endpoint + apiPaths[pathName];
};
