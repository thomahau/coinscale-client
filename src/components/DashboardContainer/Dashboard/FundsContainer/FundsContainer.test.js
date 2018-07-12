import React from 'react';
import { shallow } from 'enzyme';
import { FundsContainer } from './FundsContainer';

describe('<FundsContainer />', () => {
  const date = '2017-01-01';
  const priceData = [];
  const transactions = [];
  const balance = 20000;

  it('Renders without crashing', () => {
    shallow(<FundsContainer
      date={date}
      priceData={priceData}
      transactions={transactions}
      balance={balance}
    />);
  });

  it('Renders the header and two different table components', () => {
    const wrapper = shallow(<FundsContainer
      date={date}
      priceData={priceData}
      transactions={transactions}
      balance={balance}
    />);
    expect(wrapper.find('FundsHeader').length).toBe(1);
    expect(wrapper.find('AggregateDataTable').length).toBe(1);
    expect(wrapper.find('HoldingsTable').length).toBe(1);
  });
});
