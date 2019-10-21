import React from "react";

import ListView from "../components/ListView";
import SearchBar from "../components/SearchBar";
import connect from "react-redux/lib/connect/connect";
import {getComponents} from "../redux/actions/componentActions";

const ComponentListPage = (props) => {
  return (
    <div>
      <SearchBar getComponents={props.getComponents} />
      <ListView />
    </div>
  );
};


// Map redux state and actionCreators to props
function mapStateToProps(state) {
    const { component } = state;
    return { components: component.components };
}

const actionCreators = {
    getComponents
};

export default connect(
    mapStateToProps,
    actionCreators
)(ComponentListPage);
