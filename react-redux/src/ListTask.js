import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ListTask = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  tasks: state
});

export default connect(mapStateToProps)(ListTask);
