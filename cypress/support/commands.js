// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-localstorage-commands';
import jwt from 'jsonwebtoken';

Cypress.Commands.add('storeAuth', (audience, data) => {
  const { access_token, expires_in, id_token } = data;
  const [header, payload, signature] = id_token.split('.');
  const tokenData = jwt.decode(id_token);
  const token_type = 'Bearer';
  const clientId = Cypress.env('auth_client_id');
  const scope =
    'openid profile email read:current_user update:current_user_metadata read:recipes';

  window.localStorage.setItem(
    `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
    JSON.stringify({
      body: {
        access_token,
        id_token,
        scope,
        expires_in,
        token_type,
        decodedToken: {
          encoded: { header, payload, signature },
          header: {
            alg: 'RS256',
            typ: 'JWT',
          },
          claims: {
            __raw: id_token,
            ...tokenData,
          },
          user: tokenData,
        },
        audience,
        client_id: Cypress.env('auth_client_id'),
      },
      expiresAt: Math.floor(Date.now() / 1000) + expires_in,
    })
  );
});

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      grant_type: 'password',
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      audience: Cypress.env('auth_audience'),
      scope: 'openid profile email',
      client_id: Cypress.env('auth_client_id'),
      client_secret: Cypress.env('auth_client_secret'),
    },
  };

  return cy
    .request(options)
    .then((resp) => {
      return resp.body;
    })
    .then((body) => {
      cy.storeAuth('https://home-cooking.eu.auth0.com/api/v2/', body);
      cy.storeAuth('https://home-cooking/api', body);
      cy.visit('/recipes');
    });
});
