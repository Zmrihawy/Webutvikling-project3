import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import TagCloudHeader from "./TagCloudHeader";
import TagCloudView from "./TagCloudView";
import { getComponentStatistics } from "../../redux/actions/componentActions";
import Divider from "@material-ui/core/Divider";

const TagCloudPage = props => {
  const { getComponentStatistics, componentStatistics } = props;

  useEffect(() => {
    getComponentStatistics();
  }, [getComponentStatistics]);

  return (
    <div>
      <TagCloudHeader />
      <Divider style={{ margin: "50px" }} />
      <TagCloudView componentStatistics={componentStatistics} />
    </div>
  );
};

function mapStateToProps(state) {
  const { component } = state;
  return { componentStatistics: component.componentStatistics };
}

const actionCreators = {
  getComponentStatistics
};

export default connect(
  mapStateToProps,
  actionCreators
)(TagCloudPage);
