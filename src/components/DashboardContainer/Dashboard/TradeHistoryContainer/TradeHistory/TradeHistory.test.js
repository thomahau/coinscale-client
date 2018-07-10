import React from 'react';
import { shallow } from 'enzyme';
import TradeHistory from './TradeHistory';

describe('<TradeHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistory transactions={[]} />);
  });

  it('Renders the header and table', () => {
    const wrapper = shallow(<TradeHistory transactions={[]} />);
    expect(wrapper.contains(<h3>Trade History</h3>)).toEqual(true);
    expect(wrapper.find('ReactTable').length).toBe(1);
  });
});
