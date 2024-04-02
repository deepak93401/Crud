import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Create2() {
    const [data,setData]=useState({name:"",email:""})

    function handlechange(e){
         setData({...data,[e.target.name]:e.target.value})
         console.log(data)
    }

    const history=useNavigate()
    
    function handlesubmit(e){
      e.preventDefault()
         alert("click")
         axios.post("https://6602f64a9d7276a75554b5b5.mockapi.io/Myapp",data)
         .then((response)=>{
          console.log("Data posted sucessfully :",response)
          history("/read")
         }).catch((error)=>{
            console.log("Error posting data:",error);
         })

     }


  return (
  
    <>
      <div>Create2</div> 
      <div className='container'> 
         <div className='row'>
              <div className='col-md-4 m-auto'>
              <Form>
    <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" 
            onChange={handlechange}
             />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
             name="email" placeholder="Enter email" 
             onChange={handlechange}
              />
        </Form.Group>
        

        <Button variant="primary" type="submit" 
        onClick={handlesubmit}
        >
            Submit
        </Button>
    </Form>
              </div>
             
             </div>
         
      </div>
    </>
  )
}

export default Create2