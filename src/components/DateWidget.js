import React from 'react';

const DateWidget = () => (
  <div style={{ width: '100%' }}>
    <div className="float-right">6/1/2018</div>
    <div className="float-left">1/1/2017</div>
    <input
      type="range"
      min="1483228800"
      max="1527811200"
      step="86400"
      value="1483228800"
      style={{ width: '100%' }}
    />
  </div>
);

export default DateWidget;
