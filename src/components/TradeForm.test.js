import React from 'react';
import { shallow } from 'enzyme';
import { TradeForm } from './TradeForm';

describe('<TradeForm />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<TradeForm total="0" portfolio={{ balance: 20000, portfolio: {} }} handleSubmit={dispatch} />);
  });
});
