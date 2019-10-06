import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';

import airpods from '../media/images/items/Airpods.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SimpleContainer() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', maginTop: '30' }}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={airpods} title="Item Image Name" height="420" alt="Item Image here" />
                    </CardActionArea>
                </Card>
          </Typography>
      </Container>
    </React.Fragment>
  );
}
