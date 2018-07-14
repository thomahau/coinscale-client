import React from 'react';
import { shallow } from 'enzyme';
import CoinsTableHeader from './CoinsTableHeader';

describe('<CoinsTableHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<CoinsTableHeader />);
  });

  it('Renders the title and ModalLauncher component', () => {
    const wrapper = shallow(<CoinsTableHeader />);
    expect(wrapper.contains(<h4>Cryptocurrency Prices</h4>)).toEqual(true);
    expect(wrapper.find('ModalLauncher').length).toBe(1);
  });
});
