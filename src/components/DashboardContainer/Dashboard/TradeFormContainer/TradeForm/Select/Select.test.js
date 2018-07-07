import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  it('Renders without crashing', () => {
    shallow(<Select
      input={{ name: 'type' }}
      options={['one', 'two']}
      meta={{ touched: false, error: null }}
    />);
  });

  it('Renders error feedback when there is an error', () => {
    const error = 'dummyError';
    const wrapper = shallow(<Select input={{ name: 'type' }} options={['one', 'two']} meta={{ touched: true, error }} />);
    expect(wrapper.contains(<p className="form-help">{error}</p>)).toEqual(true);
  });
});
