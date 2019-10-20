import React from "react";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";

// Material Ui elements
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// Database linking
import { useEffect } from "react";
import { connect } from "react-redux";
import { getComponents } from "../redux/actions/componentActions";
import { Link } from "react-router-dom";

// Styles
import "../styles/homepage.css";

// HomePage layout
const HomePage = props => {
  // eslint-disable-next-line react/prop-types
  const { getComponents, components } = props;
  // const [open, setOpen] = useState({}); didnt need this ? maybe ? - Rahim

  useEffect(() => {
    getComponents();
  }, [getComponents]);

  // eslint-disable-next-line react/prop-types
  const mappedItems = components.map(component => (
    <Grid key={component.name} className="_featured_item">

      <Link to={{ pathname: "/item-details/" + component.name, state: {
          img: component.pictureURL, title: component.name,
          description: component.description,
          price: component.price} }} style={{ textDecoration: "none" }}
      >
        <Item
          img={component.pictureURL}
          title={component.name}
          description={component.description}
          price={component.price}
        />

      </Link>
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
          <Typography variant="h3" style={{ margin: "20px" }}>
            E.Catalog
          </Typography>

          <Typography variant="subtitle1" style={{ marginTop: "2px" }}>
            {" "}
            home for electronics{" "}
          </Typography>

          <Divider />

          <div className="_search_bar">
            <SearchBar />
          </div>

          <div className="_homepage">
            <Grid container justify="center" className="_homepage_featured">
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
  return { components: component.components };
}

const actionCreators = {
  getComponents
};

export default connect(
  mapStateToProps,
  actionCreators
)(HomePage);
