import React from 'react';
import LoginButton from './Authentication/LoginButton';
import LogoutButton from './Authentication/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <ul>
        {isAuthenticated && (
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        )}

        {!isAuthenticated && (
          <li>
            <LoginButton />
          </li>
        )}
        {isAuthenticated && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>

      <hr />
    </div>
  );
};

export default Header;
