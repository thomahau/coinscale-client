import React from 'react';
import { shallow, mount } from 'enzyme';
import DateWidget from './DateWidget';

describe('<DateWidget />', () => {
  it('Renders without crashing', () => {
    shallow(<DateWidget />);
  });

  it('Renders the current date display and range slider', () => {
    const wrapper = mount(<DateWidget />);
    const date = '06-01-2017';

    wrapper.setState({ date });
    expect(wrapper.contains(<h3 className="selected-date">{date}</h3>)).toEqual(true);
    expect(wrapper.find('input[type="range"]').length).toBe(1);
  });

  it('Updates state and calls changeDate + fetchPriceData when new date is selected', () => {
    const callbackOne = jest.fn();
    const callbackTwo = jest.fn();
    const wrapper = mount(<DateWidget changeDate={callbackOne} fetchPriceData={callbackTwo} />);
    const input = wrapper.find('input[type="range"]');
    const timestamp = 1530097059;
    const date = '2018-06-27';

    input.instance().value = timestamp;
    input.simulate('change');
    input.simulate('mouseUp');
    expect(wrapper.state().date).toEqual(date);
    expect(wrapper.state().timestamp.toString()).toEqual(timestamp.toString());
    expect(callbackOne).toHaveBeenCalledWith(date);
    expect(callbackTwo).toHaveBeenCalledWith(date);
  });
});
