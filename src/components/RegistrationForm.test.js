import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm } from './RegistrationForm';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RegistrationForm handleSubmit={dispatch} />);
  });
});
