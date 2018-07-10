import protectedDataReducer from './protected-data';
import { portfolioRequest, portfolioSuccess, portfolioError } from '../actions/portfolio';
import {
  transactionsRequest,
  fetchTransactionsSuccess,
  addTransactionSuccess,
  resetTransactionSuccess,
  transactionsError
} from '../actions/transactions';
import {
  changeDate,
  priceDataRequest,
  priceDataSuccess,
  priceDataError,
  setTradeCoin
} from '../actions/coinscale';

describe('protectedDataReducer', () => {
  describe('portfolioRequest', () => {
    it('Should set fetching true', () => {
      let state = { fetching: false };
      state = protectedDataReducer(state, portfolioRequest());
      expect(state.fetching).toEqual(true);
    });
  });

  describe('portfolioSuccess', () => {
    it('Should set fetching false and add portfolio', () => {
      const portfolio = { BTC: 1 };
      let state = { fetching: true, portfolio: {} };
      state = protectedDataReducer(state, portfolioSuccess(portfolio));
      expect(state.fetching).toEqual(false);
      expect(state.portfolio).toEqual(portfolio);
    });
  });

  describe('portfolioError', () => {
    it('Should set fetching false and add error', () => {
      const error = 'dummyError';
      let state = { fetching: true, error: null };
      state = protectedDataReducer(state, portfolioError(error));
      expect(state.fetching).toEqual(false);
      expect(state.error).toEqual(error);
    });
  });

  describe('transactionsRequest', () => {
    it('Should set fetching true', () => {
      let state = { fetching: false };
      state = protectedDataReducer(state, transactionsRequest());
      expect(state.fetching).toEqual(true);
    });
  });

  describe('fetchTransactionsSuccess', () => {
    it('Should set fetching false and add transaction', () => {
      const transactions = [{}];
      let state;
      state = protectedDataReducer(state, fetchTransactionsSuccess(transactions));
      expect(state.fetching).toEqual(false);
      expect(state.transactions).toEqual(transactions);
      expect(state.error).toEqual(null);
    });
  });

  describe('addTransactionSuccess', () => {
    it('Should set fetching false and add transactionData', () => {
      const transactionSuccess = 'dummyData';
      let state;
      state = protectedDataReducer(state, addTransactionSuccess(transactionSuccess));
      expect(state.fetching).toEqual(false);
      expect(state.transactionSuccess).toEqual(transactionSuccess);
      expect(state.error).toEqual(null);
    });
  });

  describe('resetTransactionSuccess', () => {
    it('Should reset transactionSuccess', () => {
      const transactionSuccess = false;
      let state = { transactionSuccess: true };
      state = protectedDataReducer(state, resetTransactionSuccess(transactionSuccess));
      expect(state.transactionSuccess).toEqual(transactionSuccess);
    });
  });

  describe('transactionsError', () => {
    it('Should set fetching false and add error', () => {
      const error = 'dummyError';
      let state = { fetching: true, error: null };
      state = protectedDataReducer(state, transactionsError(error));
      expect(state.fetching).toEqual(false);
      expect(state.error).toEqual(error);
    });
  });

  describe('changeDate', () => {
    it('Should set the new date', () => {
      const date = '01-05-2018';
      let state = { date: '12-12-2017' };
      state = protectedDataReducer(state, changeDate(date));
      expect(state.date).toEqual(date);
    });
  });

  describe('priceDataRequest', () => {
    it('Should set fetching true', () => {
      let state = { fetching: false };
      state = protectedDataReducer(state, priceDataRequest());
      expect(state.fetching).toEqual(true);
    });
  });

  describe('priceDataSuccess', () => {
    it('Should set fetching false and add priceData', () => {
      const priceData = [{ BTC: '1000' }];
      let state = { fetching: true, priceData: [] };
      state = protectedDataReducer(state, priceDataSuccess(priceData));
      expect(state.fetching).toEqual(false);
      expect(state.priceData).toEqual(priceData);
    });
  });

  describe('priceDataError', () => {
    it('Should set fetching false and add error', () => {
      const error = 'dummyError';
      let state = { fetching: true, error: null };
      state = protectedDataReducer(state, priceDataError(error));
      expect(state.fetching).toEqual(false);
      expect(state.error).toEqual(error);
    });
  });

  describe('setTradeCoin', () => {
    it('Should set fetching false and add error', () => {
      const coinToTrade = { symbol: 'BTC', name: 'Bitcoin' };
      let state = { coinToTrade: null };
      state = protectedDataReducer(state, setTradeCoin(coinToTrade));
      expect(state.coinToTrade).toEqual(coinToTrade);
    });
  });
});
