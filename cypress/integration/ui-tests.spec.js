describe('Home Cooking UI Tests', () => {
  before(() => {
    cy.login();
  });

  it('should add and delete a recipe', () => {
    cy.get('#addNewRecipe').click();
    cy.get('#recipeName').type('Recipe Name');
    cy.get('#recipeDescription').type('Recipe Description');
    cy.get('#recipeMethod').type('Recipe Method');
    cy.get('#addOrUpdate > .MuiButton-label').click();

    cy.get('.deleteRecipe:first').click();
    cy.get('#confirmDelete').click();
  });
});
