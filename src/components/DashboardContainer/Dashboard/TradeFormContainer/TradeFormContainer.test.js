import React from 'react';
import { shallow } from 'enzyme';
import { TradeFormContainer } from './TradeFormContainer';

describe('<TradeFormContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeFormContainer />);
  });

  it('Renders the header and an initial total of 0', () => {
    const wrapper = shallow(<TradeFormContainer />);
    expect(wrapper.contains(<h3>Trade</h3>)).toEqual(true);
    expect(wrapper.state('total')).toEqual(0);
  });

  it('Updates the total through onChangeAmount', () => {
    const coinData = { current: '2' };
    const wrapper = shallow(<TradeFormContainer coinData={coinData} />);
    const value = { amount: '10' };
    wrapper.instance().onChangeAmount(value);
    expect(wrapper.state('total')).toEqual('20');
  });
});
