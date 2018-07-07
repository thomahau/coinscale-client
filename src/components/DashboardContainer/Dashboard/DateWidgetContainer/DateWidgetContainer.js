import React from 'react';
import { connect } from 'react-redux';
import DateWidget from './DateWidget/DateWidget';
import { changeDate, fetchPriceData } from '../../../../actions/coinscale';

export class DateWidgetContainer extends React.Component {
  render() {
    return <DateWidget {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  changeDate: (date) => {
    dispatch(changeDate(date));
  },
  fetchPriceData: (date) => {
    dispatch(fetchPriceData(date));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DateWidgetContainer);
