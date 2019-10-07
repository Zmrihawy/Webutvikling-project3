import React from "react";
import SearchBar from "../components/SearchBar.js";
import MainBar from "../components/MainBar.js";
import ListView from "../components/ListView";

/* HomePage layout here */
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ListView />
      </div>
    );
  }
}
