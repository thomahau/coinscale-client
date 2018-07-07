import React from 'react';
import { shallow } from 'enzyme';
import DashboardNav from './DashboardNav';

describe('<DashboardNav />', () => {
  it('Renders without crashing', () => {
    shallow(<DashboardNav />);
  });

  it('Renders the navigation element with three links', () => {
    const wrapper = shallow(<DashboardNav />);
    expect(wrapper.find('NavLink').length).toBe(3);
  });
});
