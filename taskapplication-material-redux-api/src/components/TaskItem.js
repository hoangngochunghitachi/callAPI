import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import styles from './../styles/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        const { classes } = this.props;
        const { task, index } = this.props;
        return (
            <TableRow>
                <TableCell align="center" className={classes.tableCell} >{index + 1}</TableCell>
                <TableCell align="center" className={classes.tableCell}>
                    <Tooltip title={<Typography className={classes.lblNote}> {task.name} </Typography>}>
                        <p className={classes.tableCellName}>{task.name}</p>
                    </Tooltip>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}><CheckCircleIcon color={task.status ? 'primary' : 'disabled'} onClick={this.onUpdateStatus} /></TableCell>
                <TableCell align="center" className={classes.tableCell}>
                    <Button variant="contained" className={classes.btnActionEdit} color="primary" onClick={this.onUpdate}><EditIcon className={classes.iconAction} />Edit</Button>&nbsp;
                    <Button variant="contained" className={classes.btnAction} color="secondary" onClick={this.onDelete}><DeleteIcon className={classes.iconAction} />Delete</Button>
                </TableCell>
            </TableRow >
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskItem));