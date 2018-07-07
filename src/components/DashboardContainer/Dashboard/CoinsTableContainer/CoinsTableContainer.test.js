import React from 'react';
import { shallow } from 'enzyme';
import { CoinsTableContainer } from './CoinsTableContainer';

describe('<CoinsTableContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<CoinsTableContainer />);
  });

  it('Renders the CoinsTable component', () => {
    const wrapper = shallow(<CoinsTableContainer />);
    expect(wrapper.find('CoinsTable').length).toBe(1);
  });
});
