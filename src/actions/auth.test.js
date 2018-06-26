import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError,
  login
} from './auth';
import { API_BASE_URL } from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('setAuthToken', () => {
  it('Should return the action', () => {
    const authToken = 'dummyToken';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('clearAuth', () => {
  it('Should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSuccess', () => {
  it('Should return the action', () => {
    const user = { username: 'dummyUsername' };
    const action = authSuccess(user);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(user);
  });
});

describe('authError', () => {
  it('Should return the action', () => {
    const error = 'dummyError';
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('Async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Stores auth info and dispatches AUTH_SUCCESS on successful login', () => {
    const username = 'demo';
    const password = 'password';
    fetchMock.postOnce(`${API_BASE_URL}/auth/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const expectedActions = [{ type: AUTH_REQUEST }, { type: AUTH_SUCCESS, currentUser: username }];
    const store = mockStore({ currentUser: null });

    return store.dispatch(login(username, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
