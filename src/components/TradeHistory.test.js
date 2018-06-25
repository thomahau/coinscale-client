import React from 'react';
import { shallow } from 'enzyme';
import TradeHistory from './TradeHistory';

describe('<TradeHistory />', () => {
  it('Renders without crashing', () => {
    shallow(<TradeHistory transactions={[]} />);
  });
});
