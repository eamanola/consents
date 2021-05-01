import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const ResponsiveMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => { setIsOpen(true); };
  const handleClose = () => { setIsOpen(false); };

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

ResponsiveMenu.propTypes = {
  menu: PropTypes.element.isRequired,
};

export default ResponsiveMenu;
