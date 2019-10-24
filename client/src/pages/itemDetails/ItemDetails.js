import React from "react";
import "../../styles/item-details.css";

// Material Ui elements
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// ItemDetails layout
export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      name: null,
      des: null,
      amount: null
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { img, description, title, price } = this.props.location.state;

    this.setState({
      image: img,
      name: title,
      des: description,
      amount: price
    });
  }

  render() {
    // Material Ui styling
    const useStyles = makeStyles(theme => ({
      button: {
        margin: theme.spacing(1)
      },
      input: {
        display: "none"
      }
    }));

    return (
      <Grid container justify="center" className="_item_container">
        <Grid className="_content">
          <div className="_item_image">
            <CardMedia
              component="img"
              alt="Component Image"
              height="100%"
              width="100%"
              image={
                this.state.image
                  ? this.state.image
                  : "https://dummyimage.com/600x400/000/fff"
              }
            />
          </div>
        </Grid>

        <div className="_item_description">
          <CardContent className="_content">
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.des}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.amount}
            </Typography>

            <Button
              variant="outlined"
              color="primary"
              className={useStyles.button}
            >
              Add to Basket
            </Button>
          </CardContent>
        </div>
      </Grid>
    );
  }
}
