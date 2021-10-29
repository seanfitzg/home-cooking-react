import { apiUri, options } from '../config';

const updateRecipe = async (recipe, getAccessTokenSilently) => {
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'put',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const res = await fetch(apiUri, request);
  return res;
};

export default updateRecipe;
