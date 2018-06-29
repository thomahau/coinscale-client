import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage />);
  });

  it('Redirects to dashboard if user is logged in', () => {
    const wrapper = shallow(<LandingPage loggedIn />);
    expect(wrapper.find('Redirect').length).toBe(1);
  });

  it('Renders the landing page when user is not logged in', () => {
    const wrapper = shallow(<LandingPage loggedIn={false} />);
    expect(wrapper.find('h1').text()).toBe('Your stepping stone to the cryptocurrency markets');
    expect(wrapper.find('CardImg').length).toBe(3);
  });
});
