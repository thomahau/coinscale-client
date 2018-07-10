import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Renders an icon link', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
  });
});
