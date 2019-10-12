import React from 'react';

// Material Ui elements
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// Material Ui styling
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

// ItemDetails layout
export default function ItemDetails() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Typography component="div" style={{backgroundColor: 'inherit', height: '100vh',}}>

                <Paper className="_content">

                    <div className="_item_image">
                        <CardMedia
                            component="img"
                            alt="Component Image"
                            height="100%"
                            image='https://dummyimage.com/600x400/000/fff'
                            title="Image name here"
                        />
                    </div>

                    <div className="_item_description">
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                Item title here
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Item Description here!
                            </Typography>

                            <Button variant="outlined" color="primary" className={classes.button}>
                                Add to Basket
                            </Button>

                        </CardContent>
                    </div>
                </Paper>

            </Typography>

        </React.Fragment>
    );
}
