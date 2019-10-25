import React from "react";
import shoppingCartPage from "../pages/shoppingCart/ShoppingCartPage";
import renderer from "react-test-renderer";

it("renders shopping cart page", () => {
  const loggedInUser= null;
  const addComponentToShoppingCart = null;
  const removeComponentFromShoppingCart = null;
  const emptyShoppingCart = null;
  const tree = renderer.
  create(<shoppingCartPage
    loggedInUser = {loggedInUser}
    addComponentToShoppingCart = {addComponentToShoppingCart}
    removeComponentFromShoppingCart = {removeComponentFromShoppingCart} 
    emptyShoppingCart = {emptyShoppingCart}/>).toJSON();
  expect(tree).toMatchSnapshot();
});