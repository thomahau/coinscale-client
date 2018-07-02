import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm } from './RegistrationForm';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<RegistrationForm handleSubmit={handleSubmit} />);
  });

  it('Renders the register-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={handleSubmit} />);

    expect(wrapper.find('Form').hasClass('register-form')).toBe(true);
  });
});
