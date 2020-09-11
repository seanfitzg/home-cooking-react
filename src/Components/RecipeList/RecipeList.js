import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import getRecipes from '../../Api/getRecipes';
import { store } from '../../Utils/store.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export const Recipes = () => {
  const { state, dispatch } = useContext(store);
  console.log('state :>> ', state);
  const classes = useStyles();
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { isLoading, error, data } = useQuery('recipes', () =>
    getRecipes(getAccessTokenSilently)
  );
  // const getTokenAndTryAgain = async () => {
  //   await getAccessTokenWithPopup(opts);
  //   refresh();
  // };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error && error.error === 'login_required') {
    //return <button onClick={() => loginWithPopup(opts)}>Login</button>;
    return <div>Please log in...</div>;
  }
  // if (error.error === 'consent_required') {
  //   return (
  //     <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
  //   );
  // }
  if (error) {
    return <div>Oops {error.message}</div>;
  }
  return (
    <>
      <ul>
        {data.map((recipe, index) => {
          return (
            <List className={classes.root} key={index}>
              <ListItem alignItems="flex-start">
                <Link component={RouterLink} to={`/edit?id=${recipe.id}`}>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                </Link>
                <ListItemText
                  primary={recipe.name}
                  secondary={recipe.description}
                />
              </ListItem>
            </List>
          );
        })}
      </ul>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.push('/add')}
      >
        Add a new Recipe
      </Button>
      {/* <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: 'set_to_blue' })}
      >
        test
      </Button> */}
    </>
  );
};

export default Recipes;
