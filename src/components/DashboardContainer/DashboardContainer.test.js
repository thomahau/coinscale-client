import React from 'react';
import { shallow } from 'enzyme';
import { DashboardContainer } from './DashboardContainer';

describe('<DashboardContainer />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<DashboardContainer dispatch={dispatch} />);
  });

  it('Renders the Dashboard component', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<DashboardContainer dispatch={dispatch} />);
    expect(wrapper.find('Dashboard').length).toBe(1);
  });
});
