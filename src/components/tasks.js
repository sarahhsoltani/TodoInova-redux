import React ,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import EditTask from './editTask'
import {deleteTask} from "./redux/actions/action"
export default function Tasks() {
   const todos=useSelector(state=>state.todos)
   console.log("todos",todos)
   const dispatch=useDispatch()

    return(
 <div className='mt-5'>
  {
      todos.map((el,key)=>(
          <div className='d-flex' key={key}>
              <h1>{el.input}</h1>
              <button className='btn btn-danger mx-3 mt-2' onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>
              <EditTask el={el}/>
          </div>
      ))
  }
 </div>
    )
}