import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddTask = ({ dispatch }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      task: {
        id: Date.now(),
        description,
        isDone: false
      }
    });
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Add task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect()(AddTask);
