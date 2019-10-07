import React from "react";
import SearchBar from "../components/SearchBar";
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
