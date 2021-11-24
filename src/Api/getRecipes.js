import { apiUri, options } from '../config';

const getRecipes = async (getAccessTokenSilently) => {
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await fetch(apiUri, request);
  return await res.json();
};

export default getRecipes;
