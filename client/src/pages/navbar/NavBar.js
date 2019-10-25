import React from "react";
import PropTypes from "prop-types";
import TypoGraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { loggedInUser } = props;
  return (
    <React.Fragment>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button label="Home" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Home
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/component-list" style={{ textDecoration: "none" }}>
        <Button label="component-list" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Browse
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
        <Button label="shopping-cart" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Cart
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/user" style={{ textDecoration: "none" }}>
        <Button label="User" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            User
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/tag-cloud" style={{ textDecoration: "none" }}>
        <Button label="Tag Cloud" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Visualization
          </TypoGraphy>
        </Button>
      </Link>

      <div style={{ flex: 1 }} />

      <TypoGraphy justify="space-between">
        {loggedInUser && loggedInUser.username
          ? "Logged in as " + props.loggedInUser.username
          : "Not logged in"}
      </TypoGraphy>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  loggedInUser: PropTypes.shape({
    username: PropTypes.string,
    shoppingCart: PropTypes.array
  })
};

export default NavBar;
