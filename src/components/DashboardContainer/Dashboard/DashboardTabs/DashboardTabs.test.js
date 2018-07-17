import React from 'react';
import { shallow } from 'enzyme';
import { DashboardTabs } from './DashboardTabs';

describe('<DashboardTabs />', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardTabs />);
  });

  it('Renders the navigation element with 3 tabs and 3 panels', () => {
    const wrapper = shallow(<DashboardTabs />);
    expect(wrapper.find('Tab').length).toBe(3);
    expect(wrapper.find('TabPanel').length).toBe(3);
  });
});
