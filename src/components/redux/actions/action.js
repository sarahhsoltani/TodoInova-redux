import { DELETE_TASK,ADD_TASK,EDIT_TASK } from "./type";

// Add Task
export const addTask=(payload)=>{
    return{
        type:ADD_TASK,
         payload
    }
}
// Delete Task
export const deleteTask =(id)=>{
return{
    type:DELETE_TASK,
    payload:id
}
}
// Edit Task
export const editTask =(id,value)=>{
    return{
        type:EDIT_TASK,
        payload:{id,value}

    }
}