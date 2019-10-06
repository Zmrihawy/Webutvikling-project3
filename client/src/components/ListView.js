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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(props);

  useEffect(() => {
    console.log("fetching components");
    props.getComponents();
  }, [JSON.stringify(props.components)])


  
  const mappedComponents = props.components.map(component => (
    <React.Fragment key={component._id}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={component.name}/>
        <ListItemText primary={component.category}/>
        <ListItemText primary={component.producer}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            { component.specs.map(spec => (
              <ListItem className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={spec.name}/>
                <ListItemText primary={spec.value} />
                <ListItemText primary={spec.description} />
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

