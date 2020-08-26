import React from 'react';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  return (
    <div>
      New Recipe...
      <Link to="/recipes">Recipes</Link>
    </div>
  );
};

export default AddRecipe;
