import React from 'react';
import { shallow } from 'enzyme';
import FundsHeader from './FundsHeader';

describe('<FundsHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<FundsHeader />);
  });

  it('Renders the title and ModalLauncher component', () => {
    const wrapper = shallow(<FundsHeader />);
    expect(wrapper.contains(<h3 className="dashboard-h3">Funds</h3>)).toEqual(true);
    expect(wrapper.find('ModalLauncher').length).toBe(1);
  });
});
