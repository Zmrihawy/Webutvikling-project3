import React from "react";
import PropTypes from "prop-types"
import { useEffect } from "react";

import ListView from "../item/ListView";
import SearchBar from "../item/SearchBar";
import PaginationControlBar from "../item/PaginationControlBar"
import { connect } from "react-redux";
import { getPaginationComponents } from "../../redux/actions/componentActions";

const ComponentListPage = (props) => {
  const { getPaginationComponents, paginationComponents } = props;

  // Tell redux to get components on inital render and when redux state changes.
  // The second argument is an array of dependencied for useEffect(). The array also
  // plays a part in determining when the compomnent should update.
  useEffect(() => {
    getPaginationComponents();
  }, [getPaginationComponents]);

  return (
    <div>
      <SearchBar getPaginationComponents={getPaginationComponents} />
      <ListView paginationComponents={paginationComponents}/>
      <PaginationControlBar paginationMetaData={paginationComponents.paginationMetaData} getPaginationComponents={getPaginationComponents}/>
    </div>
  );
};

ComponentListPage.propTypes = {
  getPaginationComponents: PropTypes.func,
  paginationComponents: PropTypes.shape({
    paginationMetaData: PropTypes.object,
    components: PropTypes.array
  })
}

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
