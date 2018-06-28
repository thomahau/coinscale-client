import React from 'react';
import { shallow } from 'enzyme';
import TradeHistory from './TradeHistory';

describe('<TradeHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistory transactions={[]} />);
  });

  it('Renders the header and table', () => {
    const wrapper = shallow(<TradeHistory transactions={[]} />);
    expect(wrapper.contains(<h4 className="mb-4">Trade History</h4>));
    expect(wrapper.find('ReactTable').length).toBe(1);
  });
});
