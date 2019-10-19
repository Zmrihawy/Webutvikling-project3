import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { getCurrentComponent } from "../../redux/actions/componentActions";

const ItemDetails = (props) => {

  const { currentComponent, getCurrentComponent, match } = props;
  const { id } = match.params;

  useEffect(() => {
    getCurrentComponent(id);
  }, [getCurrentComponent]);

  const mappedSpecs = (currentComponent.specs || []).map(spec => (
    <div>
      <Typography variant="subtitle1" >
        name: {spec.name}
      </Typography>
      <Typography variant="subtitle1" >
        description: {spec.description}
      </Typography>
      <Typography variant="subtitle1" >
        value: {spec.value}
      </Typography>
    </div>
  ))


  return (
    <Grid container justify="center" align="center" >
      <Grid item xs={12} s={12} m={12} l={12} x={12} style={{marginBottom: "20px"}}>
        <Typography variant="h2" style={{margin: "30px"}}>
          {currentComponent.name}
        </Typography>
        <Button variant="outlined">
          Add to basket
        </Button>
      </Grid>
      <Grid item>
        <Paper>
          <img src={currentComponent.pictureURL} style={{maxWidth: "100%", maxHeight: "500px"}}/>
        </Paper>
      </Grid>    
      <Grid item>
        <Grid container>
          <Grid item>
              <Typography variant="subtitle1" >
                {currentComponent.producer}
              </Typography>
              <Typography variant="subtitle1" >
                {currentComponent.category}
              </Typography>
              <Typography variant="subtitle1" >
                {currentComponent.description}
              </Typography>
              <Typography variant="subtitle1" >
                {currentComponent.price}
              </Typography>
          </Grid>
            <Grid item>
              {mappedSpecs}
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}



// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { component } = state;
  return { currentComponent: component.currentComponent };
}

const actionCreators = {
  getCurrentComponent
};

export default connect(
  mapStateToProps,
  actionCreators
)(ItemDetails);

