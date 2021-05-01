import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Redirect } from 'react-router';

import Grid from '@material-ui/core/Grid';

const Content = () => (
  <Grid item xs>
    <main>
      <Switch>
        <Route path="/consents">
          consent list
        </Route>
        <Route path="/give-consent">
          consent form
        </Route>
        <Redirect from="/" to="/give-consent" />
      </Switch>
    </main>
  </Grid>
);

export default Content;
