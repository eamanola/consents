import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';

import ResponsiveMenu from './components/responsive-menu';
import Content from './components/content';
import Menu from './components/menu';

// const classes = makeStyles();
const menu = <Menu />;

const App = () => (
  <Container
    maxWidth="sm"
  >
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <ResponsiveMenu menu={menu} />
      <Content />
    </Grid>
  </Container>
);

export default App;
