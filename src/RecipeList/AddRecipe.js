import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const AddRecipe = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
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
          variant="outlined"
        />
        <input type="submit" value="Submit" />
      </Grid>
    </form>
  );
};

export default AddRecipe;
