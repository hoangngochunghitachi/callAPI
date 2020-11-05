import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import styles from './../styles/styles';

class TaskSortControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
        this.handleClose();
    }

    handleClick = (event) => {
        this.setState({
            ...this.state.anchorEl,
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-27">
                <div>
                    <Button className={classes.btnSort} onClick={this.handleClick}>Sort<ArrowDropDownCircleOutlinedIcon className={classes.iconSort} /></Button>
                    <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                        <MenuItem onClick={() => this.onClick('name', 1)} className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}>Name A-Z</MenuItem>
                        <MenuItem onClick={() => this.onClick('name', -1)} className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}>Name Z-A</MenuItem>
                        <MenuItem onClick={() => this.onClick('status', 1)} className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}>Status active</MenuItem>
                        <MenuItem onClick={() => this.onClick('status', -1)} className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}>Status hide</MenuItem>
                    </Menu>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskSortControl));