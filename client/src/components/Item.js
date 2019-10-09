import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../styles/item.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 200
  },
  media: {
    height: 140
  }
});

export default function Item(props) {
  const classes = useStyles();
  /* We can pass other props here like description and price */
  const { img } = props;

  return (
    <div className="_item">
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Item Title here
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Item Image will go here"
            image={img}
            title="Item Image Name"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Item description here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p color="primary">Rating</p>
          <p color="primary">Price</p>
        </CardActions>
      </Card>
    </div>
  );
}
