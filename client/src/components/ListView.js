import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import { connect } from 'react-redux';

import { getComponents } from '../redux/actions/componentActions';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


const ListView = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState({});

  const handleClick = (componentId) => {
    let tmpOpen = JSON.parse(JSON.stringify(open));
    tmpOpen[componentId] = tmpOpen[componentId] === undefined ? true : !tmpOpen[componentId];
    setOpen(tmpOpen);
  };


  useEffect(() => {
    props.getComponents();
  }, [JSON.stringify(props.components)])


  
  const mappedComponents = props.components.map(component => (
    <React.Fragment key={component._id}>
      <Divider />
      <ListItem button onClick={() => handleClick(component._id)}>
        <ListItemText primary={component.name}/>

        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        {open[component._id] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItem>
        <Collapse in={open[component._id] === undefined ? false : open[component._id]} timeout="auto" unmountOnExit>
          <ListItemText primary={"Category: " + component.category}/>
          <ListItemText primary={"Procuder: " + component.producer}/>
          <List component="div" disablePadding
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Specs
              </ListSubheader>
            }
            className={classes.root}
            >
            { component.specs.map(spec => (
              <ListItem className={classes.nested} key={spec._id}>
                <ListItemText primary={spec.name + ": " + spec.value}/>
              </ListItem>
            ))
            }
          </List>
        </Collapse>
      </ListItem>
  </React.Fragment>
  ))

  return (
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Components
        </ListSubheader>
      }
      className={classes.root}
      >
      {mappedComponents}
    </List>
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

