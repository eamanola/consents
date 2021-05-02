import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';

const Menu = () => (
  <nav className="cypress-menu">
    <Paper>
      <ListItem
        className="cypress-give-consent-link"
        button
        component={Link}
        to="/give-consent"
      >
        Give consent
      </ListItem>
      <ListItem
        className="cypress-consents-link"
        button
        component={Link}
        to="/consents"
      >
        Consents
      </ListItem>
    </Paper>
  </nav>
);

export default Menu;
