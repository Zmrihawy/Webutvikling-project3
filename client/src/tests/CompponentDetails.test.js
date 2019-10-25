import React from "react";
import ComponentDetails from "../pages/componentDetails/ComponentDetails";
import renderer from "react-test-renderer";

it("renders shopping cart page", () => {
  const  currentComponent = null;
  const getCurrentComponent = null;
  const addComponentToShoppingCart = null;
  const loggedInUser = null;
  const match= null;
  const tree = renderer.
  create(<shoppingCartPage
    currentComponent = {currentComponent}
    getCurrentComponent = {getCurrentComponent}
    addComponentToShoppingCart = {addComponentToShoppingCart} 
    loggedInUser = {loggedInUser}
    match = {match}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
