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
  removeComponentFromShoppingCart
} from "../../redux/actions/userActions";
import { typography } from "@material-ui/system";


class ShoppingCartPage extends Component {
  render() {
    // This works because loggedInUser is populated by redux
    const {
      loggedInUser,
      addComponentoShoppingCart,
      removeComponentFromShoppingCart
    } = this.props;

    let mappedComponents;
    if (
      loggedInUser &&
      JSON.stringify(loggedInUser) !== JSON.stringify({}) &&
      loggedInUser.shoppingCart
    ) {
      console.log("mapping items");
      let uniqueComponents = [];
      loggedInUser.shoppingCart.forEach(item => {
        if (!(uniqueComponents.map(x => x._id).indexOf(item._id) > -1)) {
          uniqueComponents.push(item);
        }
      });
      mappedComponents = uniqueComponents.map(item => {
        console.log(`mapping item ${item}`);
        return (
          <Grid item key={item._id}>
            <Card style={{ maxWidth: 325 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.pictureURL}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Price : {item.price} NOK
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Amount :{" "}
                    {
                      loggedInUser.shoppingCart.filter(x => x._id === item._id)
                        .length
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={"/item-details/" + item._id}>GO TO ITEM PAGE</Link>
                </Button>

                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  style={{ marginRight: 10 }}
                >
                  <RemoveIcon
                    onClick={() =>
                      removeComponentFromShoppingCart(loggedInUser, item)
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
                    onClick={() => addComponentToShoppingCart(loggedInUser, item)}
                  />
                </Fab>
              </CardActions>
            </Card>
          </Grid>
        );
      });
    }


   if (loggedInUser.shoppingCart && loggedInUser.shoppingCart.length === 0){
         return <div><Typography variant="h3" style={{ margin: "20px" }}>Your shopping cart is empty</Typography></div>;
   }else{
        return <div><Typography variant="h3" style={{ margin: "20px" }}>Shopping cart</Typography><Grid container justify="center" spacing={4} alignItems="center">{mappedComponents }</Grid></div>;
   }
    

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
  removeComponentFromShoppingCart
};

export default connect(
  mapStateToProps,
  actionCreators
)(ShoppingCartPage);
