import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Styles from './App.css'

// Component imports
import AddTask from './AddTask';
import ListTask from './ListTask';

// Reducer for managing the state
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task
      );
    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.id
          ? { ...task, description: action.description }
          : task
      );
    default:
      return state;
  }
};

// Create store using the taskReducer
const store = createStore(taskReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
