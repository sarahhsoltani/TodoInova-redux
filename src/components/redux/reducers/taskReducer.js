import { ADD_TASK,DELETE_TASK, EDIT_TASK } from "../actions/type"

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
    case DELETE_TASK :
       return(
           {...state,todos:state.todos.filter((el)=>el.id !== payload)}
       )
  case EDIT_TASK:
      return(
        {...state,todos:state.todos.map((el)=>(el.id===payload.id)?{...el,input:payload.value}:el)}
      )
    default:
    return state
}

}
export default taskReducer