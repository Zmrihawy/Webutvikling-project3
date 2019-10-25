import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TagCloudHeader from "./TagCloudHeader";
import TagCloudView from "./TagCloudView";
import {
  getComponentStatistics,
  getUserStatistics,
  getLogStatistics
} from "../../redux/actions/statisticsActions";
import Divider from "@material-ui/core/Divider";

/** 
 * Main page for tag cloud visualization. Interfaces with redux
 * to get statistics, then delegates the state to children.
 */
const TagCloudPage = props => {
  const {
    getComponentStatistics,
    getUserStatistics,
    getLogStatistics,
    statistics
  } = props;

  const handleComponentClick = () => {
    getComponentStatistics();
  };

  const handleUserClick = () => {
    getUserStatistics();
  };

  const handleSearchHistoryClick = () => {
    getLogStatistics();
  };

  useEffect(() => {
    getComponentStatistics();
  }, [getComponentStatistics]);

  return (
    <div>
      <TagCloudHeader />
      <Grid item>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={handleComponentClick}>Components</Button>
          <Button onClick={handleUserClick}>Shopping Cart</Button>
          <Button onClick={handleSearchHistoryClick}>Search History</Button>
        </ButtonGroup>
      </Grid>
      <Divider style={{ margin: "50px" }} />

      <TagCloudView statistics={statistics} />
    </div>
  );
};

function mapStateToProps(state) {
  const { statistics } = state;
  return { statistics: statistics.statistics };
}

const actionCreators = {
  getComponentStatistics,
  getUserStatistics,
  getLogStatistics
};

export default connect(
  mapStateToProps,
  actionCreators
)(TagCloudPage);
