import React from "react";
import { connect } from "react-redux";
import Task from "../../Task";
import CreateTaskInput from "./CreateTaskInput.jsx";
import * as tasksActions from "../tasks.actions";
import { sortedTasksListSelector } from "../tasks.selectors.js";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <div className='todo-list'>
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className='list'>
          {this.props.tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.props.deleteTask}
              onChange={this.props.updateTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);
