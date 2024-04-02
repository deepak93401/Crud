import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Create() {
    const [data,setdata]=useState({name:"", email:""})
    const history=useNavigate()
    function handlechange(e){

        setdata({...data,[e.target.name]:e.target.value})
        console.log(data)
     }
    
    //  const header={"Access-control-Allow-Origin":"*"}
     function handlesubmit(e){
        console.log("clicked")
        e.preventDefault()
        axios.post("https://6602f64a9d7276a75554b5b5.mockapi.io/mydata",data
        // ,header
        ).then(()=>{
          history("/read")
        }
          
        )
       
     }
    
  return (
    <>
    <h1>Create</h1>
  <div className='d-flex justify-content-center  align-items-center '>

<div className='w-50'>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" onChange={handlechange}
             />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handlechange} />
        </Form.Group>
        

        <Button variant="primary" type="submit" onClick={handlesubmit}>
            Submit
        </Button>
    </Form>

    {data.name}<br></br>
    {data.email}
    
</div>
</div>
    
    </>
  )
}

export default Create