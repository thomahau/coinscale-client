import React from 'react';
import { shallow } from 'enzyme';
import { TradeForm } from './TradeForm';

describe('<TradeForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<TradeForm
      total="0"
      portfolio={{ balance: 20000, portfolio: {} }}
      handleSubmit={handleSubmit}
    />);
  });

  it('Renders the trade-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<TradeForm
      total="0"
      portfolio={{ balance: 20000, portfolio: {} }}
      handleSubmit={handleSubmit}
    />);
    expect(wrapper.find('form').hasClass('trade-form')).toBe(true);
  });

  it('Renders a success message on successful trade', () => {
    const handleSubmit = jest.fn();
    const success = 'mockSuccessMessage';
    const wrapper = shallow(<TradeForm
      total="0"
      portfolio={{ balance: 20000, portfolio: {} }}
      handleSubmit={handleSubmit}
      transactionSuccess={success}
    />);
    expect(wrapper.find('Alert').length).toBe(1);
  });

  it('Dispatches submitTrade action when form is submitted', () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();
    const wrapper = shallow(<TradeForm
      total="1000"
      portfolio={{ balance: 20000, portfolio: {} }}
      handleSubmit={handleSubmit}
      dispatch={dispatch}
      coinData={{ currency: 'BTC', current: '1000' }}
      date="01-01-2017"
    />);
    const instance = wrapper.instance();
    const values = {
      type: 'Buy',
      amount: '1'
    };

    instance.onSubmit(values);
    expect(dispatch).toHaveBeenCalled();
  });
});
