// use http://localhost:3500/v1.0/invoke/home-cooking-app/method/recipes' if not running dapr in docker.
// http://localhost:5202/home-cooking-app/recipes is the envoy endpoint.

const api = {
  development_envoy: {
    recipesApi: 'http://localhost:5010/recipes',
  },
  development_yarp:
  {
    recipesApi: 'http://localhost:5020/home-cooking/recipes',
  },
  development_local_dapr: {
    recipesApi: 'http://localhost:5202/home-cooking-app/recipes',
  },
  production: {
    recipesApi: 'https://home-cooking-fastify.herokuapp.com/recipes',
  },
};


const getApi = () => {
  return api[process.env.REACT_APP_ENV].recipesApi;
};

export const apiUri = getApi();

export const options = {
  audience: 'https://home-cooking/api',
  scope: 'read:recipes',
};
