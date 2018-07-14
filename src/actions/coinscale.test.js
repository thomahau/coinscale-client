import {
  CHANGE_DATE,
  changeDate,
  PRICE_DATA_REQUEST,
  priceDataRequest,
  PRICE_DATA_SUCCESS,
  priceDataSuccess,
  PRICE_DATA_ERROR,
  priceDataError,
  SET_TRADE_COIN,
  setTradeCoin,
  SET_TAB_INDEX,
  setTabIndex
} from './coinscale';

describe('changeDate', () => {
  it('Should return the action', () => {
    const date = '01-01-2018';
    const action = changeDate(date);
    expect(action.type).toEqual(CHANGE_DATE);
    expect(action.date).toEqual(date);
  });
});

describe('priceDataRequest', () => {
  it('Should return the action', () => {
    const action = priceDataRequest();
    expect(action.type).toEqual(PRICE_DATA_REQUEST);
  });
});

describe('priceDataSuccess', () => {
  it('Should return the action', () => {
    const data = [];
    const action = priceDataSuccess(data);
    expect(action.type).toEqual(PRICE_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('priceDataError', () => {
  it('Should return the action', () => {
    const error = 'dummyError';
    const action = priceDataError(error);
    expect(action.type).toEqual(PRICE_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('setTradeCoin', () => {
  it('Should return the action', () => {
    const coin = { symbol: 'BTC' };
    const action = setTradeCoin(coin);
    expect(action.type).toEqual(SET_TRADE_COIN);
    expect(action.coin).toEqual(coin);
  });
});

describe('setTabIndex', () => {
  it('Should return the action', () => {
    const tabIndex = 2;
    const action = setTabIndex(tabIndex);
    expect(action.type).toEqual(SET_TAB_INDEX);
    expect(action.tabIndex).toEqual(tabIndex);
  });
});
