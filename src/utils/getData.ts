async function getData(url: string) {
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}

export default getData;
