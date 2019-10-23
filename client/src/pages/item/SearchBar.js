import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// SearchBar component
export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            textState: '',
        };

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }

    handleSubmitClick() {
        const {textState} = this.state;
        const {getPaginationComponents} = this.props;
        const tmp = {filterField: "name", filterVal: textState};
        getPaginationComponents(tmp);
    }

    handleTextChange(e) {
        this.setState({textState: e.target.value})
    }


    render() {

        const useStyles = makeStyles(theme => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            dense: {
                marginTop: theme.spacing(2),
            },
            menu: {
                width: 200,
            },
        }));

        return (
            <form>

                <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleTextChange}
                />

                <Button variant="contained" color="primary" className={useStyles.menu} onClick={this.handleSubmitClick}>
                    SEARCH
                </Button>
            </form>
        );
    }
}

SearchBar.propTypes = {
  getPaginationComponents: PropTypes.func
};
