import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

describe('<FormInput />', () => {
  it('Renders without crashing', () => {
    shallow(<FormInput type="text" input={{ name: 'username' }} meta={{ touched: false, error: null }} />);
  });

  it('Renders error feedback when there is an error', () => {
    const wrapper = shallow(<FormInput
      type="text"
      input={{ name: 'username' }}
      meta={{ touched: true, error: 'dummyError' }}
    />);
    expect(wrapper.find('FormFeedback').length).toBe(1);
  });
});
