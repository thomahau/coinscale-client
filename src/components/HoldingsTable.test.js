import React from 'react';
import { shallow } from 'enzyme';
import HoldingsTable from './HoldingsTable';

describe('<HoldingsTable />', () => {
  it('Renders without crashing', () => {
    shallow(<HoldingsTable />);
  });
});
