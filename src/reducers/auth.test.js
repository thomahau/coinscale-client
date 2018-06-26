import authReducer from './auth';
import { setAuthToken, clearAuth, authRequest, authSuccess, authError } from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

describe('authReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const currentState = {};
    const state = authReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('Should set the authToken', () => {
      const authToken = 'dummyToken';
      let state;
      state = authReducer(state, setAuthToken(authToken));
      expect(state).toEqual({
        authToken,
        currentUser: null,
        loading: false,
        error: null
      });
    });
  });

  describe('clearAuth', () => {
    it('Should clear the authToken and currentUser', () => {
      let state;
      state = authReducer(state, clearAuth());
      expect(state).toEqual(initialState);
    });
  });

  describe('authRequest', () => {
    it('Should set loading true', () => {
      let state;
      state = authReducer(state, authRequest());
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: true,
        error: null
      });
    });
  });

  describe('authSuccess', () => {
    it('Should set loading false and add currentUser', () => {
      const user = { username: 'dummyUser' };
      let state;
      state = authReducer(state, authSuccess(user));
      expect(state).toEqual({
        authToken: null,
        currentUser: user,
        loading: false,
        error: null
      });
    });
  });

  describe('authError', () => {
    it('Should set loading false and add error', () => {
      const error = 'dummyError';
      let state;
      state = authReducer(state, authError(error));
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error
      });
    });
  });
});
