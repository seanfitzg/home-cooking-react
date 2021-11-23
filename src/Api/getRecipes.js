import { apiUri, options } from '../config';

const getRecipes = async (getAccessTokenSilently) => {
  const accessToken = await getAccessTokenSilently(options);
  console.log(window.document.cookie);
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
