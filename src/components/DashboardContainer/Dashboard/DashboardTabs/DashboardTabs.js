import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FundsContainer from './FundsContainer/FundsContainer';
import TradeHistoryContainer from './TradeHistoryContainer/TradeHistoryContainer';
import TradeFormContainer from './TradeFormContainer/TradeFormContainer';
import { setTabIndex } from '../../../../actions/coinscale';
import './DashboardTabs.css';

export class DashboardTabs extends React.Component {
  render() {
    const { tabIndex, setTabIndex } = this.props;
    return (
      <Tabs selectedIndex={tabIndex} onSelect={newTabIndex => setTabIndex(newTabIndex)}>
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
