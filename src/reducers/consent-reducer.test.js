import deepfreeze from 'deep-freeze';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

import consentReducer, { init, createNew } from './consent-reducer';
import consentService from '../services/consent-service';

describe('consentReducer', () => {
  test('should default to empty array', () => {
    const state = undefined;
    const action = { type: 'foo' };

    const newState = consentReducer(state, action);
    expect(newState).toEqual([]);
  });
  test('INIT should initialize state with given data', () => {
    const state = [];
    const data = ['foo', 'bar'];
    const action = { type: 'INIT', consents: data };

    deepfreeze(state);

    const newState = consentReducer(state, action);

    expect(newState).toEqual(data);
  });
  test('NEW should add an entry to state', () => {
    const state = ['foo', 'bar'];
    const action = { type: 'NEW', consent: 'baz' };

    deepfreeze(state);

    const newState = consentReducer(state, action);

    expect(newState.length).toBe(state.length + 1);
  });
  test('Unknown actions should have no effect', () => {
    const state = ['foo', 'bar'];
    const action = { type: 'FOO' };

    deepfreeze(state);

    const newState = consentReducer(state, action);

    expect(newState).toEqual(state);
  });
});

describe('init', () => {
  test('should initialize state with db content', async () => {
    const consent = {
      name: 'foo',
      email: 'bar',
      consents: {
        newsletter: false,
        ads: false,
        statistics: false,
      },
    };

    await consentService.createNew(consent);
    await consentService.createNew(consent);

    const store = createStore(consentReducer, [], applyMiddleware(thunk));
    const state = store.getState();
    deepfreeze(state);

    await store.dispatch(init);

    const newState = store.getState();
    const dbData = await consentService.getAll();

    expect(newState).toEqual(dbData);
    await axios.delete(`${consentService.baseUrl}/1`);
    await axios.delete(`${consentService.baseUrl}/2`);
  });
});

describe('createNew', () => {
  test('should add an item to state', async () => {
    const name = 'foo';
    const email = 'bar';
    const consents = {
      newsletter: false,
      ads: false,
      statistics: false,
    };

    const store = createStore(consentReducer, [], applyMiddleware(thunk));
    const state = store.getState();
    deepfreeze(state);

    await store.dispatch(createNew(name, email, consents));

    const newState = store.getState();
    const dbData = await consentService.getAll();

    expect(newState.length).toBe(state.length + 1);
    expect(newState).toEqual(dbData);
    await axios.delete(`${consentService.baseUrl}/1`);
  });
});
