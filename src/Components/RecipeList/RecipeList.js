import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import getRecipes from '../../Api/getRecipes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  loader: {
    padding: 150,
  },
  inline: {
    display: 'inline',
  },
}));

export const Recipes = () => {
  const classes = useStyles();
  const history = useHistory();
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const { isLoading, error, data } = useQuery('recipes', () =>
    getRecipes(getAccessTokenSilently)
  );
  if (!isAuthenticated) return null;
  console.log('user :>> ', user);

  if (isLoading) {
    return <CircularProgress className={classes.loader} />;
  }
  if (error && error.error === 'login_required') {
    return <div>Please log in...</div>;
  }
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
    </>
  );
};

export default Recipes;
