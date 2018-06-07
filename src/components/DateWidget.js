import React from 'react';
import { connect } from 'react-redux';

const MIN_TIMESTAMP = 1483228800; // 01/01/2017
const MAX_TIMESTAMP = 1527811200; // 01/06/2018

export class DateWidget extends React.Component {
  render() {
    return (
      <div>
        <div className="float-right">{new Date(MAX_TIMESTAMP * 1000).toLocaleDateString()}</div>
        <div className="float-left">{new Date(MIN_TIMESTAMP * 1000).toLocaleDateString()}</div>
        <h4 className="text-center">
          {new Date(this.props.selected_timestamp * 1000).toLocaleDateString()}
        </h4>
        <input
          type="range"
          min={MIN_TIMESTAMP}
          max={MAX_TIMESTAMP}
          step="86400" // 1 day
          value={this.props.selected_timestamp}
          className="w-100"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected_timestamp: state.selected_timestamp
});

export default connect(mapStateToProps)(DateWidget);
