import React from "react";

import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { VALID_FILTER_FIELDS } from "./utility/constants"

// SearchBar component
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTextState: "",
      filterTextState: "",
      filterFieldState: "",
      anchorEl: null

    };

    this.handleSearchSubmitClick = this.handleSearchSubmitClick.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleFilterSubmitClick = this.handleFilterSubmitClick.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterMenuClick = this.handleFilterMenuClick.bind(this);
    this.handleFilterMenuClose = this.handleFilterMenuClose.bind(this);
  }

  handleSearchSubmitClick() {
    const { searchTextState } = this.state;
    const { getPaginationComponents } = this.props;
    getPaginationComponents({ filterField: "name", filterVal: searchTextState });
  }

  handleSearchTextChange(e) {
    this.setState({ searchTextState: e.target.value });
  }

  handleFilterTextChange(e) {
    this.setState({ filterTextState: e.target.value });
  }

  handleFilterMenuClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleFilterMenuClose(filter) {
    this.setState({ 
      anchorEl: null, 
      filterFieldState: filter
    });
  }

  handleFilterSubmitClick() {
    const { filterTextState, filterFieldState } = this.state;
    const { getPaginationComponents } = this.props;
    if (VALID_FILTER_FIELDS.indexOf(filterFieldState) > -1) {
      getPaginationComponents({ filterField: filterFieldState, filterVal: filterTextState });
    } else {
      alert("Please choose a filter and enter a filter value first");
      if (filterFieldState !== "") {
        console.log("Error! " + filterFieldState + " is not a valid field to sort by");
      }
    }
  }

  render() {

    return (
      <Grid container justify="center" align="center" spacing={4} style={{margin: "30px"}}>
        <Grid item>
          <Grid container justify="center" align="center" spacing={2}>
            <Grid item>
              <TextField 
                label="search"
                placeholder="Search by name"
                onChange={this.handleSearchTextChange}
              />

            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSearchSubmitClick}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" align="center" spacing={2}>

            <Grid item>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleFilterMenuClose}
              >
                <MenuItem onClick={() => this.handleFilterMenuClose("category")}>
                  Categories
                </MenuItem>
                <MenuItem onClick={() => this.handleFilterMenuClose("producer")}>
                  Producer
                </MenuItem>
                <MenuItem onClick={() => this.handleFilterMenuClose("name")}>Name</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <TextField
                label="filter"
                placeholder="Filter by value"
                onChange={this.handleFilterTextChange}
              />
            </Grid>
            <Grid item>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleFilterMenuClick}
                variant="outlined"
              >
                Filter By?
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={this.handleFilterSubmitClick} variant="contained" color="primary">Filter</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  getPaginationComponents: PropTypes.func
};
