import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  it('Renders without crashing', () => {
    shallow(<Dropdown />);
  });

  it('Renders only the login button initally', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find('Button').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('Should render the dropdown menu when showMenu is fired', () => {
    const wrapper = shallow(<Dropdown />);
    const callback = jest.fn();
    const mockedEvent = { target: {}, preventDefault: callback };
    wrapper.find('Button').simulate('click', mockedEvent);
    expect(wrapper.state('showMenu')).toEqual(true);
    expect(wrapper.find('div').length).toBe(2);
    expect(callback).toHaveBeenCalled();
  });
});
