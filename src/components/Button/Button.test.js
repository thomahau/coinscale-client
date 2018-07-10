import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('Renders without crashing', () => {
    shallow(<Button />);
  });

  it('Renders a primary button', () => {
    const wrapper = shallow(<Button primary />);
    expect(wrapper.hasClass('button-primary')).toEqual(true);
  });

  it('Renders a full-width button', () => {
    const wrapper = shallow(<Button block />);
    expect(wrapper.hasClass('u-full-width')).toEqual(true);
  });

  it('Renders a nav button', () => {
    const wrapper = shallow(<Button nav />);
    expect(wrapper.hasClass('button-nav')).toEqual(true);
  });

  it('Renders a login button', () => {
    const wrapper = shallow(<Button login />);
    expect(wrapper.hasClass('button-login')).toEqual(true);
  });
});
