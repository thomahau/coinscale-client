import React from 'react';
import { shallow, mount } from 'enzyme';
import DateWidget from './DateWidget';

describe('<DateWidget />', () => {
  it('Renders without crashing', () => {
    shallow(<DateWidget />);
  });

  it('Renders the current date display', () => {
    const wrapper = mount(<DateWidget />);
    const date = '01-01-2017';

    wrapper.setState({ date });
    expect(wrapper.contains(<h4 className="text-center">{date}</h4>)).toEqual(true);
  });
});
