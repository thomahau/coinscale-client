import React from 'react';
import { shallow } from 'enzyme';
import TradeFormHeader from './TradeFormHeader';

describe('<TradeFormHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeFormHeader />);
  });

  it('Renders the title and ModalLauncher component', () => {
    const wrapper = shallow(<TradeFormHeader />);
    expect(wrapper.contains(<h3 className="dashboard-h3">Trade</h3>)).toEqual(true);
    expect(wrapper.find('ModalLauncher').length).toBe(1);
  });
});
