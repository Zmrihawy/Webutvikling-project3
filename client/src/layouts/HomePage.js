import React from "react";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "../styles/home-page.css";

/* Sample Images to use */
import airpods from "../media/images/items/Airpods.jpg";
import mac from "../media/images/items/mbp-15.jpg";
import iphone from "../media/images/items/iphone.jpg";
import ListView from "../components/ListView";

/* HomePage layout here */
export default class HomePage extends React.Component {
  render() {
    return (
      /* Outer Container */
      <React.Fragment>
        <Container maxWidth="lg">
          <SearchBar />
          <ListView />
          <CssBaseline />
          <Typography
            component="div"
            style={{
              backgroundColor: "",
              height: "100vh",
              marginTop: "20px",
              borderRadius: "4px"
            }}
          >
            {/* HOMEPAGE Components go here */}
            <div className="_homepage">
              <h3> Feautured Items </h3>

              <Grid
                container
                spacing={2}
                justify="center"
                className="_homepage_feautured"
              >
                <Grid item>
                  <Item img={airpods} />
                </Grid>
                <Grid item>
                  <Item img={mac} />
                </Grid>
                <Grid item>
                  <Item img={iphone} />
                </Grid>
                <Grid item>
                  <Item img={mac} />
                </Grid>
                <Grid item>
                  <Item img={iphone} />
                </Grid>
              </Grid>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
