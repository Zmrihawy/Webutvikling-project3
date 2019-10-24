import React from "react";
import Item from "./Item";
import renderer from "react-test-renderer";

it("renders item", () => {
  const title = "test Title";
  const tree = renderer.create(<Item title={title} />).toJSON();
  expect(tree).toMatchSnapshot();
});
