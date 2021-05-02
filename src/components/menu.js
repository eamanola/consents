import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';

const Menu = () => (
  <nav>
    <ListItem button component={Link} to="/give-consent">Give consent</ListItem>
    <ListItem button component={Link} to="/consents">Consents</ListItem>
  </nav>
);

export default Menu;
