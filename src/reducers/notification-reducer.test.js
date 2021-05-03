import deepfreeze from 'deep-freeze';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import notificationReducer, {
  notification,
  clearNotification,
} from './notification-reducer';

describe('consentReducer', () => {
  test('should default to null notification', () => {
    const state = undefined;
    const action = { type: 'foo' };

    const newState = notificationReducer(state, action);
    expect(newState).toEqual({ message: null, severity: null });
  });
  test('MSG should set message', () => {
    const state = [];
    const data = { message: 'foo', severity: 'bar' };
    const action = { type: 'MSG', notification: data };

    deepfreeze(state);

    const newState = notificationReducer(state, action);

    expect(newState).toEqual(data);
  });
  test('CLEAR should set state to null notification', () => {
    const state = { message: 'foo', severity: 'bar' };
    const action = { type: 'CLEAR', consent: 'baz' };

    deepfreeze(state);

    const newState = notificationReducer(state, action);

    expect(newState).toEqual({ message: null, severity: null });
  });
  test('Unknown actions should have no effect', () => {
    const state = { message: 'foo', severity: 'bar' };
    const action = { type: 'FOO' };

    deepfreeze(state);

    const newState = notificationReducer(state, action);

    expect(newState).toEqual(state);
  });
});

describe('notification', () => {
  test('should update message, and severity', async () => {
    const store = createStore(notificationReducer, undefined, applyMiddleware(thunk));
    const state = store.getState();
    deepfreeze(state);

    const message = 'foo';
    const severity = 'bar';
    await store.dispatch(notification(message, severity));

    const newState = store.getState();

    expect(newState).toEqual({ message, severity });
  });
  test('severity should default to "success"', async () => {
    const store = createStore(notificationReducer, undefined, applyMiddleware(thunk));
    const state = store.getState();
    deepfreeze(state);

    const message = 'foo';
    await store.dispatch(notification(message));

    const newState = store.getState();

    expect(newState).toEqual({ message, severity: 'success' });
  });
});

describe('clearNotification', () => {
  test('should set state to null notification', async () => {
    const state = { message: 'foo', severity: 'bar' };

    const store = createStore(notificationReducer, state, applyMiddleware(thunk));

    deepfreeze(state);

    await store.dispatch(clearNotification());

    const newState = store.getState();
    expect(newState).toEqual({ message: null, severity: null });
  });
});
