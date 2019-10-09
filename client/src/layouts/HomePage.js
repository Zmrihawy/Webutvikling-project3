import React from "react";
import Item from "../components/Item";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import '../styles/home-page.css'

/* Sample Images to use */
import airpods from '../media/images/items/Airpods.jpg';
import mac from '../media/images/items/mbp-15.jpg';
import iphone from '../media/images/items/iphone.jpg';





/* HomePage layout here */
export default class HomePage extends React.Component {
    render() {
        return (
            /* Outer Container */
            <React.Fragment>

                <Container maxWidth="lg">
                    <CssBaseline/>
                        { /* HOMEPAGE Components go here */ }
                        <Typography variant="h3" style={{margin: "20px"}}>
                          Welcome to our website
                        </Typography>
                        <Divider />
                        <div className='_homepage'>
                            <Typography variant="subtitle1" style={{marginTop: "20px"}}> Feautured Items </Typography>
                            <div className="_homepage_feautured">
                                <Item img={airpods} />
                                <Item img={mac} />
                                <Item img={iphone} />
                                <Item img={mac} />
                                <Item img={iphone} />
                            </div>
                        </div>
                </Container>
            </React.Fragment>
        );
    }
}
