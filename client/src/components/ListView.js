import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { connect } from 'react-redux';

import { getComponents } from '../redux/actions/componentActions';


const ListView = (props) => {
  console.log(props);

  useEffect(() => {
    console.log("fetching components");
    props.getComponents();
  }, [JSON.stringify(props.components)])

  const mappedComponents = props.components.map(component => (
    <div key={component._id}>
      <p>
        {component.name}
      </p>
    </div>
  ))

  return (
    <div>
      ListView
      {mappedComponents}
    </div>
  )
}


function mapStateToProps(state) {
  const { component } = state
  return { components: component.components };
}

const actionCreators = {
  getComponents
}

export default connect(mapStateToProps, actionCreators)(ListView);

