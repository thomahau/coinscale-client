import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input type="text" input={{ name: 'username' }} meta={{ touched: false, error: null }} />);
  });

  it('Renders error feedback when there is an error', () => {
    const error = 'dummyError';
    const wrapper = shallow(<Input type="text" input={{ name: 'username' }} meta={{ touched: true, error }} />);
    expect(wrapper.contains(<p className="form-help">{error}</p>)).toEqual(true);
  });
});
