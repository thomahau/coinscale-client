import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders two routes', () => {
    const wrapper = shallow(<App loggedIn hasAuthToken />);
    expect(wrapper.find('Route').length).toBe(2);
  });
});
