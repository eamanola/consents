const notificationReducer = (state = {
  message: null,
  severity: null,
}, action) => {
  let newState;
  switch (action.type) {
    case 'MSG':
      newState = action.notification;
      break;
    case 'CLEAR':
      newState = {
        message: null,
        severity: null,
      };
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

// see https://material-ui.com/components/alert/ for valid severity options
export const notification = (message, severity = 'success') => async (dispatch) => {
  dispatch({ type: 'MSG', notification: { message, severity } });
};

export const clearNotification = () => ({ type: 'CLEAR' });

export default notificationReducer;
