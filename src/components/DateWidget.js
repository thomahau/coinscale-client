import React from 'react';

const RANGE_STEP = 86400; // 1 day in seconds
const MIN_TIMESTAMP = 1483228800;
const MIN_DATE = '2017-01-01';
const MAX_TIMESTAMP = Math.round(new Date().getTime() / 1000) - RANGE_STEP;
const MAX_DATE = new Date(MAX_TIMESTAMP * 1000).toISOString().slice(0, 10); // Yesterday

export default class DateWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      timestamp: MIN_TIMESTAMP,
      date: MIN_DATE
    };
  }

  onChange = (timestamp) => {
    const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
    this.setState({
      timestamp,
      date
    });
  };

  handleDateChange = (timestamp) => {
    const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
    this.props.changeDate(date);
    this.props.fetchPriceData(date);
  };

  render() {
    return (
      <div>
        <div className="float-left">{MIN_DATE}</div>
        <div className="float-right">{MAX_DATE}</div>
        <h4 className="text-center">{this.state.date}</h4>
        <input
          type="range"
          className="w-100"
          min={MIN_TIMESTAMP}
          max={MAX_TIMESTAMP}
          step={RANGE_STEP}
          value={this.state.timestamp}
          onChange={event => this.onChange(event.target.value)}
          onMouseUp={event => this.handleDateChange(event.target.value)}
        />
      </div>
    );
  }
}
