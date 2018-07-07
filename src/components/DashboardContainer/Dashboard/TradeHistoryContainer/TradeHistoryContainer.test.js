import React from 'react';
import { shallow } from 'enzyme';
import { TradeHistoryContainer } from './TradeHistoryContainer';

describe('<TradeHistoryContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistoryContainer />);
  });

  it('Renders the TradeHistory component', () => {
    const wrapper = shallow(<TradeHistoryContainer />);
    expect(wrapper.find('TradeHistory').length).toBe(1);
  });
});
