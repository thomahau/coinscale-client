import React from 'react';
import { shallow } from 'enzyme';
import AggregateDataTable from './AggregateDataTable';

describe('<AggregateDataTable />', () => {
  it('Renders without crashing', () => {
    shallow(<AggregateDataTable />);
  });

  it('Renders the table', () => {
    const wrapper = shallow(<AggregateDataTable data={[]} />);
    expect(wrapper.find('ReactTable').length).toBe(1);
  });
});
