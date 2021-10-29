import { apiUri, options } from '../config';

const postRecipe = async (recipe, getAccessTokenSilently) => {
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'post',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const res = await fetch(apiUri, request);
  return res;
};

export default postRecipe;
