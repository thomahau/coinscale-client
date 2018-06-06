import React from 'react';
import { connect } from 'react-redux';

export function DateWidget(props) {
  return (
    <div>
      <div className="float-right">{new Date(props.MAX_TIMESTAMP * 1000).toLocaleDateString()}</div>
      <div className="float-left">{new Date(props.MIN_TIMESTAMP * 1000).toLocaleDateString()}</div>
      <input
        type="range"
        min={props.MIN_TIMESTAMP}
        max={props.MAX_TIMESTAMP}
        step="86400"
        value={props.MIN_TIMESTAMP}
        className="w-100"
      />
    </div>
  );
}

const mapStateToProps = state => ({
  MIN_TIMESTAMP: state.MIN_TIMESTAMP,
  MAX_TIMESTAMP: state.MAX_TIMESTAMP
});

export default connect(mapStateToProps)(DateWidget);
