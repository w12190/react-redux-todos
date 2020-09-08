import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

/**
 * Displays a todo-list
 * 
 * TodoApp --> {TodoList, AddTodoForm}
 * 
 */
function TodoList() {

  const items = useSelector(store => store.todo)
  //console.log('this is items', items)
  const dispatch = useDispatch();


  /**Handle delete todo. */
  function deleteTodo(evt) {
    const id = evt.target.id;
    //console.log('this is id', evt.target)
    dispatch({ type: "DELETE_TODO", payload: id })
  }


  return (<div>
    <ul>
      {items.map(item => <>
      <li key={item.id}>{item.todo}</li>
      <button onClick={deleteTodo} id={item.id}>Delete</button>
      </>)}
    </ul>
  </div>)
}



export default TodoList;



//[{todo: 'shopping', id:1}]