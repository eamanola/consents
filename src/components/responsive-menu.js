import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import Menu from './menu';

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => { setIsOpen(true); };
  const handleClose = () => { setIsOpen(false); };

  const menu = <Menu onClick={handleClose} />;

  return (
    <>
      <Hidden xsDown>
        <Grid item xs={3}>
          {menu}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid item xs={12}>
          <IconButton
            className="cypress-menu-button"
            edge="start"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Drawer open={isOpen} onClose={handleClose}>
          {menu}
        </Drawer>
      </Hidden>
    </>
  );
};

export default ResponsiveMenu;
