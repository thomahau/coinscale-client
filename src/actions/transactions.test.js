import {
  TRANSACTIONS_REQUEST,
  transactionsRequest,
  FETCH_TRANSACTIONS_SUCCESS,
  fetchTransactionsSuccess,
  ADD_TRANSACTION_SUCCESS,
  addTransactionSuccess,
  RESET_TRANSACTION_SUCCESS,
  resetTransactionSuccess,
  TRANSACTIONS_ERROR,
  transactionsError
} from './transactions';

describe('transactionsRequest', () => {
  it('Should return the action', () => {
    const action = transactionsRequest();
    expect(action.type).toEqual(TRANSACTIONS_REQUEST);
  });
});

describe('fetchTransactionsSuccess', () => {
  it('Should return the action', () => {
    const data = [];
    const action = fetchTransactionsSuccess(data);
    expect(action.type).toEqual(FETCH_TRANSACTIONS_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('addTransactionSuccess', () => {
  it('Should return the action', () => {
    const data = {};
    const action = addTransactionSuccess(data);
    expect(action.type).toEqual(ADD_TRANSACTION_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('resetTransactionSuccess', () => {
  it('Should return the action', () => {
    const data = false;
    const action = resetTransactionSuccess(data);
    expect(action.type).toEqual(RESET_TRANSACTION_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('transactionsError', () => {
  it('Should return the action', () => {
    const error = 'dummyError';
    const action = transactionsError(error);
    expect(action.type).toEqual(TRANSACTIONS_ERROR);
    expect(action.error).toEqual(error);
  });
});
