import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { clearNotification } from '../reducers/notification-reducer';

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (!notification.message) {
    return null;
  }

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <Snackbar
      className="cypress-notification"
      open={notification.message}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={notification.severity}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
