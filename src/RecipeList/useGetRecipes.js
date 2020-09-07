import { useApi } from '../useApi';

const useGetRecipes = () => {
  const opts = {
    audience: 'https://home-cooking/api',
    scope: 'read:recipes',
  };
  const { loading, error, data } = useApi(
    'http://localhost:5000/recipes',
    opts
  );
  return { loading, error, data };
};

export default useGetRecipes;
