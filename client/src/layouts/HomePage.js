import React from "react";
import Item from "../components/Item";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

/* Sample Images to use */
import airpods from "../media/images/items/Airpods.jpg";
import mac from "../media/images/items/mbp-15.jpg";
import iphone from "../media/images/items/iphone.jpg";

/* HomePage layout here */
export default class HomePage extends React.Component {
  render() {
    return (
      /* Outer Container */
      <React.Fragment>
        <Container maxWidth="lg">
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
            <Typography variant="h3" style={{ margin: "20px" }}>
              Welcome to our website
            </Typography>
            <Divider />
            <div className="_homepage">
              <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
                {" "}
                Feautured Items{" "}
              </Typography>

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
