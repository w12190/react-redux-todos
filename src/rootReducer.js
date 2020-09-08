const INITIAL_STATE = {todo: []};


function rootReducer(state = INITIAL_STATE, action){
  
  switch (action.type){
    case "ADD_TODO":
      return {...state, todo: [...state.todo, action.payload]};
    case "DELETE_TODO":
      return { ...state, todo: state.todo.filter(todo => (todo.id !== action.payload))};
    default:
      return state;
  }
}

export default rootReducer;