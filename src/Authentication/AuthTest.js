import Auth from './Auth';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthTest = async () => {
  const [isAuthenticated, setAuthenticated] = useState(true);
  await Auth.handleAuthentication();
  setAuthenticated(true);
  function getAccessTokenSilently() {
    return Auth.getAccessToken();
  }
  //   const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  return { getAccessTokenSilently, isAuthenticated };
};

export default AuthTest;
