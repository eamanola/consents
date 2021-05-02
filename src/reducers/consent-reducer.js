import consentService from '../services/consent-service';

const consentReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'INIT':
      newState = action.consents;
      break;
    case 'NEW':
      newState = state.concat(action.consent);
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

export const createNew = (name, email, consents) => async (dispatch) => {
  const consent = await consentService.createNew({ name, email, consents });
  dispatch({ type: 'NEW', consent });
};

export const init = async (dispatch) => {
  const consents = await consentService.getAll();
  dispatch({ type: 'INIT', consents });
};

export default consentReducer;
