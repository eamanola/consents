import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Grid from '@material-ui/core/Grid';

import ConsentForm from './consent-form';
import ConsentsList from './consents-list';

const Content = () => (
  <Grid item xs={9}>
    <main>
      <Switch>
        <Route path="/consents">
          <ConsentsList />
        </Route>
        <Route path="/give-consent">
          <ConsentForm />
        </Route>
        <Redirect from="/" to="/give-consent" />
      </Switch>
    </main>
  </Grid>
);

export default Content;
