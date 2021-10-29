const api = {
  development: {
    recipesApi: 'http://localhost:5001/recipes',
  },
  production: {
    recipesApi: 'https://home-cooking-fastify.herokuapp.com/recipes',
  },
};
export const apiUri = api[process.env.REACT_APP_ENV].recipesApi;

export const options = {
  audience: 'https://home-cooking/api',
  scope: 'read:recipes',
};
