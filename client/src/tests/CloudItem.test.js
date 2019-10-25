import React from "react";
import renderer from "react-test-renderer";
import CloudItem from "../pages/dataVisualization/CloudItem";

it("renders cloud item", () => {
    const props = null;
    const tree = renderer.create(<CloudItem props={props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
