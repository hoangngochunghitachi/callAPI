import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import styles from './../styles/styles';

class TaskSearchControl extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    onHandleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        let { keyword } = this.state;
        const { classes } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <TextField label={<Typography className={classes.lblNote}>Keyword</Typography>}
                    className={classes.textSearchControl} name="keyword" value={keyword} onChange={this.onHandleChange}
                    InputProps={{ classes: { input: classes.textField }, endAdornment: (<IconButton className={classes.btnSearch} onClick={this.onSearch}> <SearchIcon className={classes.iconSearch} /></IconButton>) }} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    };
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl));