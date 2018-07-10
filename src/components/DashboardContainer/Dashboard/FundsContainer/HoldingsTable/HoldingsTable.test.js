import React from 'react';
import { shallow } from 'enzyme';
import HoldingsTable from './HoldingsTable';

describe('<HoldingsTable />', () => {
  it('Renders without crashing', () => {
    shallow(<HoldingsTable />);
  });

  it('Renders the table', () => {
    const wrapper = shallow(<HoldingsTable />);
    expect(wrapper.find('ReactTable').length).toBe(1);
  });
});
