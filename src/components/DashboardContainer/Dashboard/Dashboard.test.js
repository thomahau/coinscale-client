import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

  it('Renders the dashboard with switch and route elements', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.hasClass('container-fluid')).toEqual(true);
    expect(wrapper.find('DashboardNav').length).toBe(1);
    expect(wrapper.find('Switch').length).toBe(1);
    expect(wrapper.find('Route').length).toBe(4);
  });
});
