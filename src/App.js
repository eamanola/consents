import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ResponsiveMenu from './components/responsive-menu';
import Content from './components/content';
import Menu from './components/menu';

const menu = <Menu />;

const App = () => (
  <Router>
    <Container
      maxWidth="sm"
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <ResponsiveMenu menu={menu} />
        <Content />
      </Grid>
    </Container>
  </Router>
);

export default App;
