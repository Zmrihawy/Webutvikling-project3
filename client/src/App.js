import React from "react";
import Typography from "@material-ui/core/Typography";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/mainPage/MainPage";
import MainBar from "./pages/navbar/MainBar";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import ComponentListPage from "./pages/item/ComponentListPage";
import UserPage from "./pages/user/UserPage";
import "./App.css";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MainBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/item-details/:name" component={ItemDetails} />
            <Route path="/component-list" component={ComponentListPage} />
            <Route path = "/shopping-cart" component={ShoppingCartPage}/>
            <Route path="/user" component={UserPage} />
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
