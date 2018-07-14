import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FundsContainer from './FundsContainer/FundsContainer';
import TradeHistoryContainer from './TradeHistoryContainer/TradeHistoryContainer';
import TradeFormContainer from './TradeFormContainer/TradeFormContainer';
import 'react-tabs/style/react-tabs.css';
import './DashboardTabs.css';
import { setTabIndex } from '../../../../actions/coinscale';

export class DashboardTabs extends React.Component {
  render() {
    const { tabIndex, setTabIndex } = this.props;
    return (
      <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>Trade</Tab>
          <Tab>History</Tab>
          <Tab>Funds</Tab>
        </TabList>
        <div className="card-body">
          <TabPanel>
            <TradeFormContainer />
          </TabPanel>
          <TabPanel>
            <TradeHistoryContainer />
          </TabPanel>
          <TabPanel>
            <FundsContainer />
          </TabPanel>
        </div>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  tabIndex: state.protectedData.tabIndex
});

const mapDispatchToProps = dispatch => ({
  setTabIndex: tabIndex => dispatch(setTabIndex(tabIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTabs);
