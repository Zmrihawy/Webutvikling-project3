import React from "react";
import FadeIn from "react-fade-in"

// Material Ui elements
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

// Database linking
import { useEffect } from "react";
import { connect } from "react-redux";
import { getFeaturedComponents } from "../../redux/actions/componentActions";
import { Link } from "react-router-dom";

// Styles
import "../../styles/homepage.css";

// HomePage layout
const HomePage = props => {
  const { getFeaturedComponents, featuredComponents } = props;

  const baseDelay = 500;

  useEffect(() => {
    getFeaturedComponents();
  }, [getFeaturedComponents]);

  const mappedItems = featuredComponents.map((component, index) => (
      <Grid item key={index} className="_featured_component" xs={12} sm={4} md={4} lg={3} xl={3}> 
        <FadeIn delay={baseDelay + 2000 + (500*index)} transitionDuration="2000">

        <Link
          to={"/component-details/" + component._id}
          style={{ textDecoration: "none" }}
        >
          <Card style={{ minHeight: "300px", width: "200px", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
            <CardMedia 
                    component="img"
                    style={{height: "180px" }}
                    src={component.pictureURL}
              />
            <Divider style={{ marginTop: "10px", marginBottom: "5px" }} />
            {component.name}
            <br />
            {component.producer}
            <br />
            {component.price + "kr"}
          </Card>
        </Link>
        </FadeIn>
      </Grid>
  ));

  return (
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
          
          <FadeIn delay={baseDelay} transitionDuration="1000">
            <Typography variant="h3" style={{ margin: "20px" }}>
              E.Catalog
            </Typography>
          </FadeIn>

          <FadeIn delay={baseDelay + 1000} transitionDuration="1000">
            <Typography variant="subtitle1" style={{ marginTop: "2px" }}>
              {" "}
              home for electronics{" "}
            </Typography>
            <Divider style={{margin: "20px"}}/>
          </FadeIn>

          <FadeIn delay={baseDelay + 2000} transitionDuration="2000">
            <Typography variant="subtitle1">
              Featured items:
            </Typography>
          </FadeIn>

          <div className="_homepage">
            <Grid
              container
              justify="center"
              align="center"
              spacing={4}
              className="_homepage_featured"
            >
              {mappedItems}
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

// Map redux state and actionCreators to props
function mapStateToProps(state) {
  const { component } = state;
  return { featuredComponents: component.featuredComponents };
}

const actionCreators = {
  getFeaturedComponents
};

export default connect(
  mapStateToProps,
  actionCreators
)(HomePage);
