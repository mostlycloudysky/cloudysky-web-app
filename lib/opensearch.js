const opensearch_api_key = process.env.OPENSEARCH_API_KEY;

export const getSearchResults = async (query) => {
  console.log('query', query);
  const response = await fetch(
    `https://api-prod.cloudysky.link/search?q=${query}`,
    {
      headers: {
        'x-api-key': opensearch_api_key,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log('search data', response);

  return response.json();
};
