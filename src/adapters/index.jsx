export const fetchData = () => {
  const URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body;
};
