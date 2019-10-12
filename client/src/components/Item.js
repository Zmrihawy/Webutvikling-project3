import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    card: {
        maxWidth: 300
    },
    media: {
        height: 140
    }
});

export default function Item(props) {
    const classes = useStyles();

    // We can pass other props here like description and price
    // eslint-disable-next-line react/prop-types
    const {img, description, price, title} = props;

    return (
        <div className="_item">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} component="img" alt="Item Image"
                               image={img ? img : 'https://dummyimage.com/600x400/000/fff'}/>


                    <h2 className='_title'>
                        {title}
                    </h2>

                    <div className='_description' color="textSecondary">
                        {description}
                    </div>

                </CardActionArea>

                <CardActions>
                    <p id="_price">{price},-</p>
                </CardActions>

            </Card>
        </div>
    );
}
