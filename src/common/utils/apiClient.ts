export const endpoint = (path: string): string => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  if (typeof endpoint === 'string') {
    return endpoint + path;
  }
  return '';
};
