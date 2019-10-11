import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
    // eslint-disable-next-line react/prop-types
    const {img, description, price, title, category} = props;

    return (
        <div className="_item">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                    </CardContent>

                    <CardMedia className={classes.media} component="img" alt="Item Image"
                        image={img}
                        title={title}/>

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <p color="primary">{category}</p>
                    <p color="primary">{price}</p>
                </CardActions>

            </Card>
        </div>
    );
}
