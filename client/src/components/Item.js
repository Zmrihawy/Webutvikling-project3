import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        maxHeight: 345,
    },
});

export default function Item(props) {
    const classes = useStyles();
    /* We can pass other props here like description and price */
    const {img} = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Item Image will go here"
                    height="220"
                    image={img}
                    title="Item Image Name"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Item Title here
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Item description here
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <p color="primary">
                    Rating
                </p>
                <p color="primary">
                    Price
                </p>
            </CardActions>
        </Card>
    );
}
