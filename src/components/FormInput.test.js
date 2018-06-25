import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

describe('<FormInput />', () => {
  it('Renders without crashing', () => {
    shallow(<FormInput type="text" input={{ name: 'username' }} meta={{ touched: false, error: null }} />);
  });
});
