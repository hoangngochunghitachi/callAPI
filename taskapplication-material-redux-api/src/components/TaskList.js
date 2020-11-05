
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import styles from './../styles/styles';
import TaskItem from "./TaskItem";

class TaskList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        let filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value
        });
    }

    render() {
        const { classes } = this.props;
        let { tasks, filterTable, keyword, sort } = this.props;
        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            });
        }
        tasks = tasks.filter((task) => {
            if (filterTable.status === -1) {
                return task;
            } else {
                return task.status
                    === (filterTable.status === 1 ? true : false);
            }
        });

        // search
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
        // sort
        if (sort.by === 'name') {
            // sort name
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            })
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            })
        }
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center" className={classes.tableHead}>Index</TableCell>
                                    <TableCell align="center" className={classes.tableHead}>Name</TableCell>
                                    <TableCell align="center" className={classes.tableHead}>Status</TableCell>
                                    <TableCell align="center" className={classes.tableHead}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">
                                        <TextField label={<Typography className={classes.lblNote}> Name </Typography>} InputProps={{ classes: { input: classes.textField } }} name="filterName" value={this.state.filterName} onChange={this.onHandleChange} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Select className={classes.selectStatus} native name="filterStatus" value={this.state.filterStatus} onChange={this.onHandleChange}>
                                            <option value="-1">All</option>
                                            <option value="1">Active</option>
                                            <option value="0">Hide</option>
                                        </Select>
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                                {elmTasks}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskList));