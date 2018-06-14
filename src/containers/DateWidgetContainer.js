import { connect } from 'react-redux';
import DateWidget from '../components/DateWidget';
import { changeDate, fetchPriceData } from '../actions/coinscale';

const mapStateToProps = state => ({
  coinList: state.coinList
});

const mapDispatchToProps = dispatch => ({
  changeDate: (date) => {
    dispatch(changeDate(date));
  },
  fetchPriceData: (date) => {
    dispatch(fetchPriceData(date));
  }
});

const DateWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateWidget);

export default DateWidgetContainer;
