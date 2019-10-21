import React from "react";
import Typography from '@material-ui/core/Typography'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./layouts/MainPage";
import MainBar from './components/MainBar';
import ItemDetails from "./layouts/ItemDetails";
import ComponentListPage from './layouts/ComponentListPage';
import "./App.css";
import ShoppingCartPage from "./layouts/ShoppingCartPage";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MainBar/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/item-details" component={ItemDetails} />
            <Route path="/component-list" component={ComponentListPage} />
            <Route path = "/shopping-cart" component={ShoppingCartPage}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
