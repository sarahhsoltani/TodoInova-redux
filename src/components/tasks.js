import React ,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {deleteTask} from "./redux/actions/action"
export default function Tasks() {
    const todos=useSelector(state=>state.todos)
    console.log("todos",todos)
const dispatch=useDispatch()


    return(
 <div className='mt-5'>
     
    {
        todos.map((el,key)=>(
            <div key={key} className="d-flex mt-4">
                <h1>{el.input}</h1>
                <button className="btn btn-danger me-3" onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
                <button className="btn btn-warning">Edit</button>
            </div>
        ))
    }
 </div>
    )
}