import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useApi from '../useApi';
import { useHistory } from 'react-router-dom';
import postRecipe from './postRecipe';

const AddRecipe = () => {
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();
  const [recipe, setRecipe] = useState({ name: '', method: '' });
  const addNewRecipe = async () => {
    const res = await postRecipe(recipe, getAccessTokenSilently);
    if (res.ok) {
      history.push('/recipes');
    }
  };

  return (
    <form>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="outlined-full-width"
          label="Name"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={recipe.name}
          onChange={(evt) => setRecipe({ ...recipe, name: evt.target.value })}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Method"
          style={{ margin: 8 }}
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            style: {
              height: '200px',
              padding: '0 14px',
            },
          }}
          value={recipe.method}
          onChange={(evt) => setRecipe({ ...recipe, method: evt.target.value })}
          variant="outlined"
        />
        <Button variant="outlined" color="primary" onClick={addNewRecipe}>
          Add
        </Button>
      </Grid>
    </form>
  );
};

export default AddRecipe;
