import React from 'react';
import { shallow } from 'enzyme';
import FeatureCards from './FeatureCards';

describe('<FeatureCards />', () => {
  it('Renders without crashing', () => {
    shallow(<FeatureCards />);
  });

  it('Renders three cards with images and content', () => {
    const wrapper = shallow(<FeatureCards />);
    expect(wrapper.find('img').length).toBe(3);
    expect(wrapper.find('h3').length).toBe(3);
  });
});
