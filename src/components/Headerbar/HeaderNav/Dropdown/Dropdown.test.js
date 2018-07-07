import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  it('Renders without crashing', () => {
    shallow(<Dropdown />);
  });

  //   it('Renders the nav element', () => {
  //     const wrapper = shallow(<Headerbar />);
  //     expect(wrapper.find('nav').length).toBe(1);
  //     expect(wrapper.find('Link').length).toBe(1);
  //   });
});
