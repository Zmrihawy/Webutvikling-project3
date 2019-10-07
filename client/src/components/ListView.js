import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";

import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import { connect } from "react-redux";

import { getComponents } from "../redux/actions/componentActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const ListView = props => {
  const classes = useStyles();
  const { getComponents, components } = props;

  // State for details toggle for each component list element
  // Open is an object where each component id is a key to its boolean
  const [open, setOpen] = useState({});

  // Handle event that a component list item was clicked. If component is
  // open it should be closed and vice versa.
  const handleClick = componentId => {
    // Deep copy open to new variable tmpOpen. This is done to make setOpen() actually
    // trigger a rerender. If only shallow copying is done, it will not trigger a rerender
    // even if the object is changed, because it only checks if the reference has changed.
    let tmpOpen = JSON.parse(JSON.stringify(open));
    // Since default value is false, set to true if it is undefined (since that means
    // this was the first time the component was clicked), else change it from whatever
    // the previous value was.
    tmpOpen[componentId] =
      tmpOpen[componentId] === undefined ? true : !tmpOpen[componentId];
    setOpen(tmpOpen);
  };

  // Tell redux to get components on inital render and when redux state changes.
  // The second argument is an array of dependencied for useEffect(). The array also
  // plays a part in determining when the compomnent should update.
  useEffect(() => {
    getComponents();
  }, [getComponents]);

  // Map component to material list elements, with collapse functionality
  // React.Fragment is used to return more than one JSX node
  const mappedComponents = components.map(component => (
    <React.Fragment key={component._id}>
      <Divider />
      <ListItem button onClick={() => handleClick(component._id)}>
        <ListItemText primary={component.name} />

        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        {open[component._id] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItem>
        <Collapse
          in={open[component._id] === undefined ? false : open[component._id]}
          timeout="auto"
          unmountOnExit
        >
          <ListItemText primary={"Category: " + component.category} />
          <ListItemText primary={"Procuder: " + component.producer} />
          <List
            component="div"
            disablePadding
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Specs
              </ListSubheader>
            }
            className={classes.root}
          >
            {component.specs.map(spec => (
              <ListItem className={classes.nested} key={spec._id}>
                <ListItemText primary={spec.name + ": " + spec.value} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </ListItem>
    </React.Fragment>
  ));

  // Return a list with all components
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
)(ListView);
