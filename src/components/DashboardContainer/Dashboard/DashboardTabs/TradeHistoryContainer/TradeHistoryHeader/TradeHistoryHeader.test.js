import React from 'react';
import { shallow } from 'enzyme';
import TradeHistoryHeader from './TradeHistoryHeader';

describe('<TradeHistoryHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistoryHeader />);
  });

  it('Renders the title and ModalLauncher component', () => {
    const wrapper = shallow(<TradeHistoryHeader />);
    expect(wrapper.contains(<h3 className="dashboard-h3">History</h3>)).toEqual(true);
    expect(wrapper.find('ModalLauncher').length).toBe(1);
  });
});
