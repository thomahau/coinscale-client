import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './Navigation';

describe('<Navigation />', () => {
  it('Renders without crashing', () => {
    shallow(<Navigation />);
  });
});
