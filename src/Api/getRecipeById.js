import { apiUri, options } from '../config';

const getRecipeById = async (getAccessTokenSilently, id) => {
  const accessToken = await getAccessTokenSilently(options);
  const request = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const res = await fetch(`${apiUri}/${id}`, request);
  return await res.json();
};

export default getRecipeById;
