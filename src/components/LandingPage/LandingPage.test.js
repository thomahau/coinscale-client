import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';
import Jumbotron from './Jumbotron/Jumbotron';
import FeatureCards from './FeatureCards/FeatureCards';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Footer from './Footer/Footer';

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
    expect(wrapper.find(Jumbotron).length).toBe(1);
    expect(wrapper.find(FeatureCards).length).toBe(1);
    expect(wrapper.find(RegistrationForm).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
