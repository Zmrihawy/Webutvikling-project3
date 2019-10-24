import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import { getCurrentComponent } from "../../redux/actions/componentActions";
import { addItemToShoppingCart } from "../../redux/actions/userActions";

const ItemDetails = props => {
  const {
    currentComponent,
    getCurrentComponent,
    addItemToShoppingCart,
    loggedInUser,
    match
  } = props;
  const { id } = match.params;

  useEffect(() => {
    getCurrentComponent(id);
  }, [getCurrentComponent]);

  const handleAddToCart = () => {
    addItemToShoppingCart(loggedInUser, currentComponent);
  };

  const mappedSpecs = (currentComponent.specs || []).map(spec => (
    <div>
      <Typography variant="subtitle1">name: {spec.name}</Typography>
      <Typography variant="subtitle1">
        description: {spec.description}
      </Typography>
      <Typography variant="subtitle1">value: {spec.value}</Typography>
    </div>
  ));

  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ marginBottom: "40px" }}
      >
        <Typography variant="h2" style={{ margin: "30px" }}>
          {currentComponent.name}
        </Typography>
        {loggedInUser && JSON.stringify(loggedInUser) !== JSON.stringify({}) ? (
          <Button onClick={handleAddToCart} color="primary" variant="outlined">
            {" "}
            Add to cart{" "}
          </Button>
        ) : (
          <div
            onClick={() => alert("please go to the user page and log in first")}
          >
            <Button variant="outlined" disabled>
              {" "}
              Add to cart{" "}
            </Button>
          </div>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        style={{ marginBottom: "20px" }}
      >
        <Paper>
          <img
            src={currentComponent.pictureURL}
            style={{ maxWidth: "100%", maxHeight: "500px" }}
          />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        style={{ marginBottom: "20px" }}
      >
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={12}
            style={{ marginBottom: "20px" }}
          >
            <Typography variant="body1" style={{ margin: "2%" }}>
              {"Producer: " + currentComponent.producer}
            </Typography>
            <Typography variant="body1" style={{ margin: "2%" }}>
              {currentComponent.category}
            </Typography>
            <Typography variant="subtitle1" style={{ margin: "2%" }}>
              {"Price: " + currentComponent.price + "kr"}
            </Typography>
            <Typography variant="subtitle1" style={{ margin: "2%" }}>
              {currentComponent.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={12}
            style={{ marginBottom: "20px" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Specs</TableCell>
                  <TableCell>value</TableCell>
                  <TableCell align="right">description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(currentComponent.specs || []).map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { component, user } = state;
  return {
    currentComponent: component.currentComponent,
    loggedInUser: user.loggedInUser
  };
}

const actionCreators = {
  getCurrentComponent,
  addItemToShoppingCart
};

export default connect(
  mapStateToProps,
  actionCreators
)(ItemDetails);
