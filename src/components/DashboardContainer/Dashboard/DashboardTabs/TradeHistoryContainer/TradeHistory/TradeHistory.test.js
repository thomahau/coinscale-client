import React from 'react';
import { shallow } from 'enzyme';
import TradeHistory from './TradeHistory';

describe('<TradeHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistory transactions={[]} />);
  });

  it('Renders the table', () => {
    const wrapper = shallow(<TradeHistory transactions={[]} />);
    expect(wrapper.find('ReactTable').length).toBe(1);
  });
});
