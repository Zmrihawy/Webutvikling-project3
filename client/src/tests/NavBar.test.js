import React from "react";
import NavBar from "../pages/navbar/NavBar"
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("renders tag search bar", () => {
  let loggedInUser = {
    username: 'foo',
    shoppingCart: []
  }
  const tree = renderer.
    create(
      <Router>
        <NavBar loggedInUser={loggedInUser} />
      </Router>
    )

  expect(tree).toMatchSnapshot();
});

