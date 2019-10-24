import React from "react";
import renderer from 'react-test-renderer';
import HomePage from "../pages/mainPage/HomePage";

it("renders home page", () => {
    const getFeaturedComponents = null;
    const featuredComponents = null;
    const tree = renderer.create(<HomePage featuredComponents={featuredComponents} getFeaturedComponents={getFeaturedComponents}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
