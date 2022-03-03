import { editTask } from "./redux/actions/action";
import React, {useState} from "react"
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch} from "react-redux"
const EditTask=({el})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // state
    const [todo,setTodo]=useState("")
    const dispatch=useDispatch()
    // function
    const handleChange=(e)=>{
        setTodo(
            e.target.value
        )
        console.log('todo', todo)
    }
    const editTodoo=()=>{
        dispatch(editTask(el.id,todo));
        handleClose()
    }
return(
    <>
    <Button variant="btn btn-success" onClick={handleShow}>
    edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
  
    <input type="text" defaultValue={el.input} onChange={handleChange} />
  


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  onClick={editTodoo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)
}
export default EditTask