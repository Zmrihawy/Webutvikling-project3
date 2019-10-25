import React from "react";
import UserLogin from "../pages/user/UserLogin"
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

it("renders tag search bar", () => {
  let users = [{
    username: 'foo',
    shoppingCart: []
  }]
  const tree = renderer.
    create(
      <Router>
        <UserLogin users={users} setLoggedInUser={() => null} createNewUser={() => null}  />
      </Router>
    )

  expect(tree).toMatchSnapshot();
});

