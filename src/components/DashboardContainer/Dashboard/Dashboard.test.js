import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

  it('Renders the dashboard', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.hasClass('container-fluid')).toEqual(true);
  });
});
