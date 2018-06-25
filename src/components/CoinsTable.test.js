import React from 'react';
import { shallow } from 'enzyme';
import CoinsTable from './CoinsTable';

describe('<CoinsTable />', () => {
  it('Renders without crashing', () => {
    shallow(<CoinsTable date="01-01-2017" priceData={[]} />);
  });
});
