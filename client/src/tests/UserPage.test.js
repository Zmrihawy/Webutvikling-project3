import React from "react";
import UserPage from "../pages/user/UserPage";
import renderer from 'react-test-renderer';

it("renders userpage", () => {
    const users = null;
    const setLoggedInUser = null;
    const createNewUser = null;
    const tree = renderer.create(<UserPage users={users}
                                           setLoggedInUser={setLoggedInUser}
                                           createNewUser={createNewUser}/>).toJSON();
    expect(tree).toMatchSnapshot();
});