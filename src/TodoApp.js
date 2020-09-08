import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

/**
 * Render TodoApp.
 * 
 * TodoApp --> {TodoList, AddTodoForm}
 */
function TodoApp(){

  return(<div>
    <TodoList />
    <AddTodoForm />
  </div>)
}


export default TodoApp;