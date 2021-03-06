import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

/**
 * Buttons for controlling pagination. Basically
 * just button with numbers for pages, that has onClick
 * functions that send the same query as the previously sent query,
 * but with new pageNum
 */
const PaginationControlBar = props => {
  const { paginationMetaData, getPaginationComponents } = props;
  const { totPages } = paginationMetaData;

  const handleClick = page => {
    let { queryParams } = paginationMetaData;
    queryParams.pageNum = page;
    getPaginationComponents(queryParams);
  };

  let buttons = [];
  if (totPages && totPages > 1) {
    for (let i = 0; i < totPages; i++) {
      buttons.push(
        <Button onClick={() => handleClick(i)} key={i}>
          {i + 1}
        </Button>
      );
    }
  } else {
    buttons.push(<Button key={1}> 1 </Button>);
  }

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {buttons}
    </ButtonGroup>
  );
};

PaginationControlBar.propTypes = {
  paginationMetaData: PropTypes.object,
  getPaginationComponents: PropTypes.func
};

export default PaginationControlBar;
