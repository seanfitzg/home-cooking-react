const api = {
  development: {
    recipesApi: 'http://localhost:5000/recipes',
  },
  dapr: {
    recipesApi:
      'http://localhost:3500/v1.0/invoke/home-cooking-app/method/recipes',
  },
  production: {
    recipesApi: 'https://home-cooking-fastify.herokuapp.com/recipes',
  },
};

const getApi = () => {
  if (
    process.env.REACT_APP_USE_DAPR &&
    process.env.REACT_APP_USE_DAPR.toUpperCase() === 'TRUE'
  ) {
    return api.dapr.recipesApi;
  } else {
    return api[process.env.REACT_APP_ENV].recipesApi;
  }
};

export const apiUri = getApi();

export const options = {
  audience: 'https://home-cooking/api',
  scope: 'read:recipes',
};
