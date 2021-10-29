import { apiUri, options } from '../config';

const deleteRecipe = async (recipe, getAccessTokenSilently) => {
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'delete',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const res = await fetch(`${apiUri}/${recipe.id}`, request);
  return res;
};

export default deleteRecipe;
