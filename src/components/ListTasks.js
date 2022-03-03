import React ,{useState}from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from "./redux/actions/action"
import Tasks from './tasks';
const ListTa=()=>{
    const [input, setInput] = useState("")
    const dispatch=useDispatch()
     // HandleChane
     const handleChange=(e)=>{
        setInput(
            e.target.value
        )
        console.log(`input`, input)
       }
    //    add function
 
      const AddTasks=(e)=>{
     if(input){
        e.preventDefault()
        dispatch(addTask({input:input,id:Math.random()}))
        setInput("")
     }
     else{
         alert("is empty...")
     }

      }
    return(

<div className='container my-5 '>
            <h1>Todo List <i className="fa-solid fa-clipboard-check"></i></h1>
             <form className="d-flex mx-5 mt-5">
        <input className="form-control" type="search" value={input}   onChange={handleChange} placeholder="enter your todo list" aria-label="Search"/>
        <button className="btn btn-success px-5" type="submit"  onClick={AddTasks}>Add</button>
      </form>
 <Tasks/>
        </div>

    )
}
export default ListTa