import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import './App.css';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';


class App extends Component {

  onToggleForm = () => {
    let { taskEditting } = this.props;
    if (taskEditting && taskEditting.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  onShowForm = () => {
    this.props.onShowForm();
  }

  render() {
    let { classes } = this.props;
    let isDisplayForm = this.props.isDisplayForm;
    return (
      <div className="container">
        <div className="text-center">
          <h2>Management Task Application</h2>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-12 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Task Form */}
            <TaskForm />
          </div>
          <div className={isDisplayForm ? 'col-xs-12 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            {/* <ButtonAddTask /> */}
            <Button variant="contained" className={classes.btnAddJob} color="primary" onClick={this.onToggleForm}><AddIcon className={classes.iconAddJob} />Add New Job</Button>
            {/* Task Control  */}
            <TaskControl />
            {/* Task List  */}
            <TaskList />
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditting: state.taskEditting
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onShowForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
