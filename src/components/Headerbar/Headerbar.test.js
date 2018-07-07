import React from 'react';
import { shallow } from 'enzyme';
import Headerbar from './Headerbar';

describe('<Headerbar />', () => {
  it('Renders without crashing', () => {
    shallow(<Headerbar />);
  });

  it('Renders the nav element', () => {
    const wrapper = shallow(<Headerbar />);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('Link').length).toBe(1);
  });
});
