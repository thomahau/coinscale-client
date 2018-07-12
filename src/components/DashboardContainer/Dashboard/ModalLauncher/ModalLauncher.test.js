import React from 'react';
import { shallow } from 'enzyme';
import ModalLauncher from './ModalLauncher';

describe('<ModalLauncher />', () => {
  it('Renders without crashing', () => {
    shallow(<ModalLauncher />);
  });

  it('Renders only the launch button initally', () => {
    const wrapper = shallow(<ModalLauncher />);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('Modal').length).toBe(0);
  });

  it('Should render the modal when launch button is clicked', () => {
    const wrapper = shallow(<ModalLauncher />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('showModal')).toEqual(true);
    expect(wrapper.find('Modal').length).toBe(1);
  });
});
