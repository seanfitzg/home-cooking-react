describe('login', () => {
  it('should successfully log into our app', () => {
    cy.login()
      .then((resp) => {
        return resp.body;
      })
      .then((body) => {
        cy.storeAuth('https://home-cooking.eu.auth0.com/api/v2/', body);
        cy.storeAuth('https://home-cooking/api', body);
        cy.visit('/recipes');
      });
  });
});
