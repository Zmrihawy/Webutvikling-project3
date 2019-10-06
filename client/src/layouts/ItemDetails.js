import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


import '../styles/item-details.css';

import airpods from '../media/images/items/Airpods.jpg';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: 'inherit', height: '100vh', }}>
          
          <div className="_content">
            
            <div className="_item_image">
                  <CardMedia
                    component="img"
                    alt="Component Image"
                    height="100%"
                    image={airpods}
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
                  </CardContent>
                </div>
          
          <p> To be styled to look better, - rahim </p>
          
          </div>
          
          
          </Typography>
      </Container>
    </React.Fragment>
  );
}
