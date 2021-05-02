import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

const Menu = () => (
  <nav className="cypress-menu">
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
  </nav>
);

export default Menu;
