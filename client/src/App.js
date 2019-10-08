import React from "react";
import Typography from '@material-ui/core/Typography'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MainPage from "./layouts/MainPage";
import MainBar from './components/MainBar';
import ItemDetails from "./layouts/ItemDetails";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/itemDetails" component={ItemDetails} />
            <Route component={() => (<Typography variant="h1"> Sorry, page not found </Typography>)}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
