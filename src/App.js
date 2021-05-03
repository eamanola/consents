import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ResponsiveMenu from './components/responsive-menu';
import Content from './components/content';
import { init } from './reducers/consent-reducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init);
  }, []);

  return (
    <Container
      maxWidth="md"
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
        style={{ padding: '1em 0' }}
      >
        <ResponsiveMenu />
        <Content />
      </Grid>
    </Container>
  );
};

export default App;
