import React from "react";
import TagCloudView from "../pages/dataVisualization/TagCloudView"
import renderer from "react-test-renderer";

it("renders tag cloud view", () => {
  let stats = {};
  stats.stat1 = 10;
  stats.stat2 = 137;
  stats.stat3 = 1;
  const tree = renderer.
    create(<TagCloudView statistics={stats} />)
  expect(tree).toMatchSnapshot();
});

