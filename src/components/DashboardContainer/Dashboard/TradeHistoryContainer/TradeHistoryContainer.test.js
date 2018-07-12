import React from 'react';
import { shallow } from 'enzyme';
import { TradeHistoryContainer } from './TradeHistoryContainer';

describe('<TradeHistoryContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistoryContainer />);
  });

  it('Renders the header and TradeHistory component', () => {
    const wrapper = shallow(<TradeHistoryContainer />);
    expect(wrapper.find('TradeHistoryHeader').length).toBe(1);
    expect(wrapper.find('TradeHistory').length).toBe(1);
  });
});
