import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onEdit(task.id)}
      />
      <p className={task.isDone ? 'done' : ''}>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;

