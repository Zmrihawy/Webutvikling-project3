import React from "react";
import renderer from 'react-test-renderer';
import UserLogin from "../pages/user/UserLogin";

it("renders user login page", () => {
    const users = null;
    const setLoggedInUser = null;
    const createNewUser = null;
    const tree = renderer
        .create(<UserLogin users={users}
                           setLoggedInUser={setLoggedInUser}
                           createNewUser={createNewUser}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});