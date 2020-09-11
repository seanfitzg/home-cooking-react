import React from 'react';
import './App.css';
import Profile from './Authentication/Profile';
import { Auth0Provider } from '@auth0/auth0-react';
import RecipeAppBar from './Components/RecipeAppBar/RecipeAppBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Container from '@material-ui/core/Container';
import { StateProvider } from './Utils/store.js';

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="home-cooking.eu.auth0.com"
        clientId="SpHE4tA54XSUcmrO9A1pkK36AW0rSMSZ"
        audience="https://home-cooking.eu.auth0.com/api/v2/"
        // redirectUri={`${window.location.origin}/recipes`}
        scope="read:current_user update:current_user_metadata"
      >
        <StateProvider>
          <Container maxWidth="md">
            <div>{process.env.REACT_APP_ENV}</div>
            <RecipeAppBar />
            <Routes />
          </Container>
        </StateProvider>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
