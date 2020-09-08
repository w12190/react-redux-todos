import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';


/** Handle form submit.
 * State: 
 *  -formData
 * 
 * App --> TodoApp --> 
*/
function AddTodoForm() {
  const [formData, setFormData] = useState(""); 
  const dispatch = useDispatch()


  /**Handles form inputs. */
  function handleChange(evt){
    console.log('handleClick()')

    const { value } = evt.target
    //setFormData(oldFormData => ({ ...oldFormData, [name]: value }))
    setFormData(oldString => value )
  }


  /** Handles form submission */
  function handleSubmit(evt) {
    console.log('handleSubmit()')

    evt.preventDefault()
    dispatch({ type: "ADD_TODO", payload: { todo: formData, id: uuid() } })
    setFormData("") //todo.
  }


  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="todo" />
    <input
      id="todo"
      name="todo"
      value={formData.todo}
      onChange={handleChange}
    />
    <button>Submit! </button>

  </form>)
}


export default AddTodoForm;