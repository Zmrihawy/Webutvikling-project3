import React from 'react'
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const PaginationControlBar = (props) => {
  const { paginationMetaData, getPaginationComponents } = props;
  const { totPages } = paginationMetaData;


  const handleClick = (page) => {
    let { queryParams } = paginationMetaData;
    queryParams.pageNum = page;
    getPaginationComponents(queryParams)
  }

  let buttons = [];
  if (totPages && totPages > 1) {
    for (let i = 0; i < totPages; i++) {
      buttons.push(
        <Button onClick={() => handleClick(i)}> 
          {(i + 1)} 
        </Button>)
    }
  } else {
    buttons.push(<Button> 1 </Button>)
  }


  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {buttons}
    </ButtonGroup>
  )
}

PaginationControlBar.propTypes = {
  paginationMetaData: PropTypes.object,
  getPaginationComponents: PropTypes.func
}

export default PaginationControlBar;

