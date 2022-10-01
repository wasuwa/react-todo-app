export const endpoint = (path: string): string => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  if (typeof apiEndpoint === 'string') {
    return apiEndpoint + path;
  }
  return '';
};
