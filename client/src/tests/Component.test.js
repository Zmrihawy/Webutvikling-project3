import React from "react";
import Component from "../pages/componentList/Component";
import renderer from "react-test-renderer";

it("renders item", () => {
  const title = "test Title";
  const tree = renderer.create(<Component title={title} />).toJSON();
  expect(tree).toMatchSnapshot();
});
