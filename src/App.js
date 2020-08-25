import React from 'react';
import './App.css';
import RecipeList from './RecipeList/RecipeList';
import LoginButton from './Authentication/LoginButton';
import LogoutButton from './Authentication/LogoutButton';
import Profile from './Authentication/Profile';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
      domain="home-cooking.eu.auth0.com"
      clientId="SpHE4tA54XSUcmrO9A1pkK36AW0rSMSZ"
      audience="https://home-cooking.eu.auth0.com/api/v2/"
      redirectUri={window.location.origin}
      scope="read:current_user update:current_user_metadata read:recipes"
    >
      {/* <Profile /> */}
      <LoginButton />
      <LogoutButton />
      <div className="App">
        <RecipeList />
      </div>
    </Auth0Provider>
  );
}

export default App;
