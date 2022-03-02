import { DELETE_TASK,ADD_TASK,COMPLETE_TASK,EDIT_TASK } from "./type";

// Add Task
export const addTask=(payload)=>{
    return{
        type:ADD_TASK,
         payload
    }
}
//Delete Task
export const deleteTask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id
    }
}