import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addComponentToShoppingCart,
  removeComponentFromShoppingCart,
  emptyShoppingCart
} from "../../redux/actions/userActions";


class ShoppingCartPage extends Component {

  constructor(props) {
    super(props)

    this.handleCases = this.handleCases.bind(this);
  }

  handleCases() {
    const {
      loggedInUser,
      addItemToShoppingCart,
      removeItemFromShoppingCart,
      emptyShoppingCart
    } = this.props;

    if (!loggedInUser || JSON.stringify(loggedInUser) === JSON.stringify({})) {
      console.log("user not logged int")
      return (
        <div>
          <Typography variant="subtitle1" style={{ margin: "20px" }}>
            Please log in to view your shopping
          </Typography>
        </div>
      )
    } 
    if (!loggedInUser.shoppingCart || loggedInUser.shoppingCart.length === 0) {
      return (
      <div>
        <Typography variant="subtitle1" style={{ margin: "20px" }}>
          Your shopping cart is empty
        </Typography>
      </div>
      )
    }
    return null
  }

  render() {
    // This works because loggedInUser is populated by redux
    const {
      loggedInUser,
      addComponentoShoppingCart,
      removeComponentFromShoppingCart,
      emptyShoppingCart
    } = this.props;

      let mappedComponents;
      let uniqueComponents = [];
      loggedInUser.shoppingCart.forEach(component => {
        if (!(uniqueComponents.map(x => x._id).indexOf(component._id) > -1)) {
          uniqueComponents.push(component);
        }
      });
      mappedComponents = uniqueComponents.map(component => {
      let uniqueComponents = [];
      loggedInUser.shoppingCart.forEach(component => {
        if (!(uniqueComponents.map(x => x._id).indexOf(component._id) > -1)) {
          uniqueComponents.push(component);
        }
      });
      })
      mappedComponents = uniqueComponents.map(component => {
        return (
          <Grid item key={component._id}>
            <Card style={{ maxWidth: 325 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={component.pictureURL}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {component.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {component.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Price : {component.price} NOK
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Amount :{" "}
                    {
                      loggedInUser.shoppingCart.filter(x => x._id === component._id)
                        .length
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={"/component-details/" + component._id}>GO TO ITEM PAGE</Link>
                </Button>

                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  style={{ marginRight: 10 }}
                >
                  <RemoveIcon
                    onClick={() =>
                      removeComponentFromShoppingCart(loggedInUser, component)
                    }
                  />
                </Fab>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  style={{ marginRight: 10 }}
                >
                  <AddIcon
                    onClick={() => addComponentToShoppingCart(loggedInUser, component)}
                  />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
    )})

    return (
      <div>
        <Typography variant="h3" style={{ margin: "20px" }}>
          Shopping cart
        </Typography>
        {this.handleCases()}
        <Grid container justify="center" spacing={4} alignItems="center">
          {mappedComponents}
        </Grid>
        {mappedComponents && mappedComponents.length > 0 ? 
          <div style={{margin: "50px"}}>
            <Button variant="contained" color="primary" onClick={() => emptyShoppingCart(loggedInUser)}>
              Buy items
            </Button>
              <Typography variant="subtitle1">
                Total price: {loggedInUser.shoppingCart.map(x => x.price).reduce((accumulator, current) => {
                  return (accumulator + current)
                })}
              </Typography>
          </div>
            : null
        }
    </div>
  )
  }  
}

// This is the actual readonly redux state
// We need to logginUserState, so we extract it
function mapStateToProps(state) {
  const { user } = state;
  return { loggedInUser: user.loggedInUser };
}

// These represents functions for changing redux state
// currently commented out, but we will need them later
const actionCreators = {
  addComponentToShoppingCart,
  removeComponentFromShoppingCart,
  emptyShoppingCart
  // setLoggedInUser,
  // createNewUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(ShoppingCartPage);
