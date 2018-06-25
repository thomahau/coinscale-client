import React from 'react';
import { shallow } from 'enzyme';
import FormInputPlaintext from './FormInputPlaintext';

describe('<FormInputPlaintext />', () => {
  it('Renders without crashing', () => {
    shallow(<FormInputPlaintext type="text" input={{ name: 'username' }} />);
  });
});
