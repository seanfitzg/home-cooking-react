import React from 'react';
import { useQuery } from 'react-query';

const RecipeList = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:5000/recipes').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div>
      {data.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default RecipeList;
