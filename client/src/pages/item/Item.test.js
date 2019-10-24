import React from "react";
import Item from "./Item";
import renderer from 'react-test-renderer';

it("renders item", () => {
    const title = "test Title";
    const tree = renderer.create(<Item title={title}/>).toJSON();
    console.log(tree);
    console.log(tree.props);
    expect(tree.props[0].props.title).toBe('test Title');
});