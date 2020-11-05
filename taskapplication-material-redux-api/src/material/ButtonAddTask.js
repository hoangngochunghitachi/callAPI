import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add'

class ButtonAddTask extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" className={classes.button}><AddIcon />Add New Job</Button>
            </div>
        )
    }
}

export default withStyles(styles)(ButtonAddTask);