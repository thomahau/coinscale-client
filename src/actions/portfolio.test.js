import {
  PORTFOLIO_REQUEST,
  portfolioRequest,
  PORTFOLIO_SUCCESS,
  portfolioSuccess,
  PORTFOLIO_ERROR,
  portfolioError
} from './portfolio';

describe('portfolioRequest', () => {
  it('Should return the action', () => {
    const action = portfolioRequest();
    expect(action.type).toEqual(PORTFOLIO_REQUEST);
  });
});

describe('portfolioSuccess', () => {
  it('Should return the action', () => {
    const data = {};
    const action = portfolioSuccess(data);
    expect(action.type).toEqual(PORTFOLIO_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('portfolioError', () => {
  it('Should return the action', () => {
    const error = 'dummyError';
    const action = portfolioError(error);
    expect(action.type).toEqual(PORTFOLIO_ERROR);
    expect(action.error).toEqual(error);
  });
});
