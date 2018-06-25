import React from 'react';
import { shallow } from 'enzyme';
import AggregateDataTable from './AggregateDataTable';

describe('<AggregateDataTable />', () => {
  it('Renders without crashing', () => {
    shallow(<AggregateDataTable data={[]} />);
  });
});
