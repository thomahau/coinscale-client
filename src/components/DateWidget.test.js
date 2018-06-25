import React from 'react';
import { shallow } from 'enzyme';
import DateWidget from './DateWidget';

describe('<DateWidget />', () => {
  it('Renders without crashing', () => {
    shallow(<DateWidget />);
  });
});
