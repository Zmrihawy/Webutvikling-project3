import React from "react";

import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";

import {
  VALID_FILTER_FIELDS,
  VALID_SORTBY_FIELDS
} from "../../utility/constants";

/**
 * Search bar that has controls for searching and filtering etc.
 * Its basically a large query builder for for the pagination endpoint
 */
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
    const {
      searchTextState,
      filterTextState,
      filterFieldState,
      sortDesc,
      sortbyFieldState
    } = this.state;
    const { getPaginationComponents } = this.props;
    // Build queryparams based on state
    let queryParams = {};
    // Add filter if it is set and is valid
    if (VALID_FILTER_FIELDS.indexOf(filterFieldState) > -1) {
      queryParams = {
        ...queryParams,
        ...{ filterField: filterFieldState, filterVal: filterTextState }
      };
    } else {
      if (filterFieldState !== "") {
        console.log(
          "Error! " + filterFieldState + " is not a valid field to sort by"
        );
      }
    }

    // Add sortby field if it is set and is valid
    if (VALID_SORTBY_FIELDS.indexOf(sortbyFieldState) > -1) {
      queryParams = sortbyFieldState
        ? { ...queryParams, ...{ sortBy: sortbyFieldState } }
        : queryParams;
    } else {
      if (filterFieldState !== "") {
        console.log(
          "Error! " + sortbyFieldState + " is not a valid field to sort by"
        );
      }
    }

    // Add nameSearch if it is set
    queryParams = searchTextState
      ? { ...queryParams, ...{ nameSearch: searchTextState } }
      : queryParams;
    // Add sort direction if it is set
    queryParams =
      sortDesc === false
        ? queryParams
        : { ...queryParams, ...{ isAsc: "false" } };
    // Fire the query
    getPaginationComponents(queryParams);
  }

  handleSortDirChange(e) {
    this.setState({ sortDesc: e.target.checked });
  }

  EnterKeyValue = e => {
    if (e.key === "Enter") {
      this.handleFilterTextChange(e);
      this.handleSubmit(e);
    }
  };

  EnterKeyName = e => {
    if (e.key === "Enter") {
      this.handleSearchTextChange(e);
      this.handleSubmit(e);
    }
  };

  render() {
    const {
      // searchTextState,
      // filterTextState,
      filterFieldState,
      filterAnchorEl,
      sortbyFieldState,
      sortbyAnchorEl,
      sortDesc
    } = this.state;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ margin: "30px" }}
      >
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <Grid container justify="center" align="center" spacing={2}>
            <Grid item>
              <TextField
                label="search"
                placeholder="Search by name"
                onKeyDown={this.EnterKeyName}
                onChange={this.handleSearchTextChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <TextField
            label="filter"
            placeholder="Filter by value"
            onKeyDown={this.EnterKeyValue}
            onChange={this.handleFilterTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleFilterMenuClick}
            variant="outlined"
          >
            {filterFieldState && typeof filterFieldState === "string"
              ? "Filter " + filterFieldState
              : "Filter By?"}
          </Button>
          <Menu
            id="filter-menu"
            anchorEl={filterAnchorEl}
            keepMounted
            open={Boolean(filterAnchorEl)}
            onClose={this.handleFilterMenuClose}
          >
            <MenuItem onClick={() => this.handleFilterMenuClose("category")}>
              Categories
            </MenuItem>
            <MenuItem onClick={() => this.handleFilterMenuClose("producer")}>
              Producer
            </MenuItem>
            <MenuItem onClick={() => this.handleFilterMenuClose("")}>
              None
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <Grid container justify="center" align="center" spacing={2}>
            <Grid item>
              <Menu
                id="sortby-menu"
                anchorEl={sortbyAnchorEl}
                keepMounted
                open={Boolean(sortbyAnchorEl)}
                onClose={this.handleSortbyMenuClose}
              >
                <MenuItem onClick={() => this.handleSortbyMenuClose("price")}>
                  Price
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("name")}>
                  Name
                </MenuItem>
                <MenuItem
                  onClick={() => this.handleSortbyMenuClose("category")}
                >
                  Categories
                </MenuItem>
                <MenuItem
                  onClick={() => this.handleSortbyMenuClose("producer")}
                >
                  Producer
                </MenuItem>
                <MenuItem
                  onClick={() => this.handleSortbyMenuClose("description")}
                >
                  Description
                </MenuItem>
                <MenuItem onClick={() => this.handleSortbyMenuClose("")}>
                  None
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleSortbyMenuClick}
                variant="outlined"
              >
                {sortbyFieldState && typeof sortbyFieldState === "string"
                  ? "Sort " + sortbyFieldState
                  : "Sort by?"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <Checkbox checked={sortDesc} onChange={this.handleSortDirChange} />
          Sort descending
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  getPaginationComponents: PropTypes.func
};
