import React, { useState, useEffect } from 'react';
import { useApi } from '../useApi';
import { useAuth0 } from '@auth0/auth0-react';

export const Recipes = () => {
  const opts = {
    audience: 'https://home-cooking/api',
    scope: 'read:recipes',
  };
  const { login, getAccessTokenWithPopup } = useAuth0();
  const { loading, error, refresh, data } = useApi(
    'http://localhost:5000/recipes',
    opts
  );
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === 'login_required') {
      return <button onClick={() => login(opts)}>Login</button>;
    }
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }
  console.log('data :>> ', data);
  return (
    <ul>
      {data.map((receipe, index) => {
        return <li key={index}>{receipe.name}</li>;
      })}
    </ul>
  );
};

export default Recipes;
