import React from "react";

import ListView from "../components/ListView";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { getPaginationComponents } from "../redux/actions/componentActions";

const ComponentListPage = (props) => {
  return (
    <div>
      <SearchBar getPaginationComponents={props.getPaginationComponents} />
      <ListView />
    </div>
  );
};


// Map redux state and actionCreators to props
function mapStateToProps(state) {
    const { component } = state;
    return { paginationComponents: component.paginationComponents };
}

const actionCreators = {
    getPaginationComponents
};

export default connect(
    mapStateToProps,
    actionCreators
)(ComponentListPage);
