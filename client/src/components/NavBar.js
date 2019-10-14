import React from "react";
import TypoGraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button label="Home" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Home
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/item-details" style={{ textDecoration: "none" }}>
        <Button label="item-details" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Item details
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/component-list" style={{ textDecoration: "none" }}>
        <Button label="component-list" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Component list
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/categories" style={{ textDecoration: "none" }}>
        <Button label="categories" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Categories
          </TypoGraphy>
        </Button>
      </Link>

      <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
        <Button label="shopping-cart" style={{ textTransform: "none" }}>
          <TypoGraphy variant="subtitle1" style={{ color: "white" }}>
            Shopping cart
          </TypoGraphy>
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default NavBar;
