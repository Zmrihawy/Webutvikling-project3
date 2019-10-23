import React from "react";

import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";

import { VALID_FILTER_FIELDS, VALID_SORTBY_FIELDS } from "../../utility/constants"

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTextState: "",
      filterTextState: "",
      filterFieldState: "",
      filterAnchorEl: null,
      sortbyFieldState: "",
      sortbyAnchorEl: null,
      sortDesc: false
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterMenuClick = this.handleFilterMenuClick.bind(this);
    this.handleFilterMenuClose = this.handleFilterMenuClose.bind(this);
    this.handleSortbyMenuClick = this.handleSortbyMenuClick.bind(this);
    this.handleSortbyMenuClose = this.handleSortbyMenuClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSortDirChange = this.handleSortDirChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.setState({ searchTextState: e.target.value });
  }

  handleFilterTextChange(e) {
    this.setState({ filterTextState: e.target.value });
  }

  handleFilterMenuClick(e) {
    this.setState({ filterAnchorEl: e.currentTarget });
  }

  handleFilterMenuClose(filter) {
    this.setState({ 
      filterAnchorEl: null, 
      filterFieldState: filter
    });
  }

  handleSortbyMenuClick(e) {
    this.setState({ sortbyAnchorEl: e.currentTarget });
  }

  handleSortbyMenuClose(sortby) {
    this.setState({ 
      sortbyAnchorEl: null, 
      sortbyFieldState: sortby
    });
  }

  handleSubmit() {
    const { searchTextState, filterTextState, filterFieldState, sortDesc, sortbyFieldState } = this.state;
    const { getPaginationComponents } = this.props;
    // Build queryparams based on state
    let queryParams = {};
    // Add filter if it is set and is valid
    if (VALID_FILTER_FIELDS.indexOf(filterFieldState) > -1) {
      queryParams = { ...queryParams, ...{ filterField: filterFieldState, filterVal: filterTextState }};
    } else {
      if (filterFieldState !== "") {
        console.log("Error! " + filterFieldState + " is not a valid field to sort by");
      }
    }
    
    // Add sortby field if it is set and is valid
    if (VALID_SORTBY_FIELDS.indexOf(sortbyFieldState) > -1) {  
      queryParams = sortbyFieldState ? {...queryParams, ...{ sortBy: sortbyFieldState}} : queryParams;
    } else {
      if (filterFieldState !== "") {
        console.log("Error! " + sortbyFieldState + " is not a valid field to sort by");
      }
    }

    // Add nameSearch if it is set
    queryParams = searchTextState ? {...queryParams, ...{ nameSearch: searchTextState}} : queryParams;
    // Add sort dir if it is set
    queryParams = sortDesc === false ? queryParams : {...queryParams, ...{ isAsc: "false" }};
    // Fire the query
    getPaginationComponents(queryParams);
  }

  handleSortDirChange(e) {
    this.setState({sortDesc: e.target.checked});
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
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" align="center" spacing={2}>
            <Grid item>
              <Menu
                id="filter-menu"
                anchorEl={this.state.filterAnchorEl}
                keepMounted
                open={Boolean(this.state.filterAnchorEl)}
                onClose={this.handleFilterMenuClose}
              >
                <MenuItem onClick={() => this.handleFilterMenuClose("category")}>
                  Categories
                </MenuItem>
                <MenuItem onClick={() => this.handleFilterMenuClose("producer")}>
                  Producer
                </MenuItem>
                <MenuItem onClick={() => this.handleFilterMenuClose("INVALID_FILTER")}>None</MenuItem>
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
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" align="center" spacing={2}>
            <Grid item>
              <Menu
                id="sortby-menu"
                anchorEl={this.state.sortbyAnchorEl}
                keepMounted
                open={Boolean(this.state.sortbyAnchorEl)}
                onClose={this.handleSortbyMenuClose}
              >
                <MenuItem onClick={() => this.handleSortbyMenuClose("price")}>
                  Price
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("name")}>
                  Name
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("category")}>
                  Categories
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("producer")}>
                  Producer
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("description")}>
                  Description
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("INVALID_SORT_FIELD")}>None</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleSortbyMenuClick}
                variant="outlined"
              > 
                Sort by?
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
         <Checkbox
            checked={this.state.sortDesc}
            onChange={this.handleSortDirChange}
          />
          Sort descending
        </Grid>
        <Grid item>
          <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  getPaginationComponents: PropTypes.func
};
