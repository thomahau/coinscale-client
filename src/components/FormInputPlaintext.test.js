import React from 'react';
import { shallow } from 'enzyme';
import FormInputPlaintext from './FormInputPlaintext';

describe('<FormInputPlaintext />', () => {
  it('Renders without crashing', () => {
    shallow(<FormInputPlaintext type="text" input={{ name: 'username' }} />);
  });

  it('Renders a plaintext input field corresponding to the values passed in', () => {
    const wrapper = shallow(<FormInputPlaintext type="text" input={{ name: 'symbol' }} />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
    expect(wrapper.find('input[id="symbol"]').length).toBe(1);
  });
});
