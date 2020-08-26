import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddRecipe from './RecipeList/AddRecipe';
import RecipeList from './RecipeList/RecipeList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/recipes">
        <RecipeList />
      </Route>
      <Route path="/add">
        <AddRecipe />
      </Route>
    </Switch>
  );
};

export default Routes;
