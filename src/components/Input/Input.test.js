import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<FormInput />', () => {
  it('Renders without crashing', () => {
    shallow(<Input type="text" input={{ name: 'username' }} meta={{ touched: false, error: null }} />);
  });

  it('Renders error feedback when there is an error', () => {
    const wrapper = shallow(<Input
      type="text"
      input={{ name: 'username' }}
      meta={{ touched: true, error: 'dummyError' }}
    />);
    expect(wrapper.find('FormFeedback').length).toBe(1);
  });
});
