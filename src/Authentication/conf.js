const {
  REACT_APP_AUTH0_DOMAIN: AUTH0_DOMAIN = '',
  REACT_APP_AUTH0_CLIENT_ID: AUTH0_CLIENT_ID = '',
} = process.env;

export default {
  AUTH0: {
    domain: 'home-cooking.eu.auth0.com',
    clientID: 'SpHE4tA54XSUcmrO9A1pkK36AW0rSMSZ',
    callbackUrl: `${window.location.origin}/callback`,
    returnTo: `${window.location.origin}`,
    responseType: 'token id_token',
    scope: 'read:current_user update:current_user_metadata',
  },
};
