import { ADD_TASK,DELETE_TASK } from "../actions/type"

const initialState={
    todos:[],
   
}

const taskReducer=(state=initialState,action)=>{
    const {type,payload}=action
switch (type){
    case ADD_TASK:
        return(
            {...state,
                todos:[...state.todos,payload]}
        )
 
  case DELETE_TASK:
  return(
    {...state,todos:state.todos.filter((el)=>el.id !== payload)}
  )
    default:
    return state
}

}
export default taskReducer