import React from "react";
import Component from "./Component";
import renderer from "react-test-renderer";

it("renders item", () => {
  const title = "test Title";
  const tree = renderer.create(<Component title={title} />).toJSON();
  expect(tree).toMatchSnapshot();
});
