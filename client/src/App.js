import React from "react";
import "./App.css";
import MainPage from "./layouts/MainPage";
import { Provider } from "react-redux";
import MainBar from './components/MainBar';
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainBar/>
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
