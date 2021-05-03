import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import consentReducer from './reducers/consent-reducer';
import notificationReducer from './reducers/notification-reducer';

const reducer = combineReducers({
  consents: consentReducer,
  notification: notificationReducer,
});

const INIT_STATE = undefined;

export default createStore(reducer, INIT_STATE, applyMiddleware(thunk));
