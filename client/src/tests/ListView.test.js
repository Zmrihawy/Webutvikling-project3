import React from "react";
import ListView from "../pages/componentList/ListView"
import renderer from "react-test-renderer";

it("renders list view component", () => {
  let components = {
    components: [{
    _id: 1234,
    name: 'awesome_computer',
    category: 'laptop',
    producer: 'oranger',
    price: 9999,
    }],
    paginationmetaData: {}
  }
  const tree = renderer.
    create(<ListView paginationComponents={components} />)
  expect(tree).toMatchSnapshot();
});

