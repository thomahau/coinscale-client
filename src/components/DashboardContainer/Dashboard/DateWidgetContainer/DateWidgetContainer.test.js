import React from 'react';
import { shallow } from 'enzyme';
import { DateWidgetContainer } from './DateWidgetContainer';

describe('<DateWidgetContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<DateWidgetContainer />);
  });

  it('Renders the DateWidget component', () => {
    const wrapper = shallow(<DateWidgetContainer />);
    expect(wrapper.find('DateWidget').length).toBe(1);
  });
});
