import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from './Jumbotron';

describe('<Jumbotron />', () => {
  it('Renders without crashing', () => {
    shallow(<Jumbotron />);
  });

  it('Renders the headline and button', () => {
    const wrapper = shallow(<Jumbotron />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(1);
  });
});
