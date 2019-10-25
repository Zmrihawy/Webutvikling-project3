import React from "react";
import Typography from "@material-ui/core/Typography";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/mainPage/MainPage";
import MainBar from "./pages/navbar/MainBar";
import ComponentDetails from "./pages/componentDetails/ComponentDetails";
import ComponentListPage from "./pages/componentList/ComponentListPage";
import UserPage from "./pages/user/UserPage";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";
import TagCloudPage from "./pages/dataVisualization/TagCloudPage";
import "./App.css";

import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MainBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/component-details/:id" component={ComponentDetails} />
            <Route path="/component-list" component={ComponentListPage} />
            <Route path="/shopping-cart" component={ShoppingCartPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/tag-cloud" component={TagCloudPage} />
            <Route
              component={() => (
                <Typography variant="h1"> Sorry, page not found </Typography>
              )}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
