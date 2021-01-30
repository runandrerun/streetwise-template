export const fetchFakeData = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body;
};
