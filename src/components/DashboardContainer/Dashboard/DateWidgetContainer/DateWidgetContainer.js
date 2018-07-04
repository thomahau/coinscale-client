import { connect } from 'react-redux';
import DateWidget from './DateWidget/DateWidget';
import { changeDate, fetchPriceData } from '../../../../actions/coinscale';

const mapDispatchToProps = dispatch => ({
  changeDate: (date) => {
    dispatch(changeDate(date));
  },
  fetchPriceData: (date) => {
    dispatch(fetchPriceData(date));
  }
});

const DateWidgetContainer = connect(
  null,
  mapDispatchToProps
)(DateWidget);

export default DateWidgetContainer;
