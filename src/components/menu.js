import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const Menu = ({ onClick }) => (
  <nav className="cypress-menu">
    <Paper>
      <MenuList>
        <MenuItem
          className="cypress-give-consent-link"
          component={Link}
          to="/give-consent"
          onClick={onClick}
        >
          Give consent
        </MenuItem>
        <MenuItem
          className="cypress-consents-link"
          component={Link}
          to="/consents"
          onClick={onClick}
        >
          Consents
        </MenuItem>
      </MenuList>
    </Paper>
  </nav>
);

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
