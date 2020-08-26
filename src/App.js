import React from 'react';
import './App.css';
import Profile from './Authentication/Profile';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  console.log('window.location.origin :>> ', window.location.origin);
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="home-cooking.eu.auth0.com"
        clientId="SpHE4tA54XSUcmrO9A1pkK36AW0rSMSZ"
        audience="https://home-cooking.eu.auth0.com/api/v2/"
        // redirectUri={`${window.location.origin}/recipes`}
        scope="read:current_user update:current_user_metadata"
      >
        <Header />
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
