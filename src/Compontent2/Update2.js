import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Update2() {
    
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    // console.log("name",name)

   useEffect(()=>{
         setId(localStorage.getItem("id"))
         setName(localStorage.getItem("name"))
         setEmail(localStorage.getItem("email"))

   },[])

   const navigate=useNavigate()

   function  handleupdate(e){
    e.preventDefault()
    axios.put(`https://6602f64a9d7276a75554b5b5.mockapi.io/Myapp/${id}`,
    {name:name,email:email}).then(
      ()=>{
         navigate("/read") 
      }
    )
   }
  
  return (
    <>
      <div className='container'> 
         <div className='row'>
              <div className='col-md-4 m-auto'>
              <Form>
    <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" 
            value={name}
           
            onChange={(e)=>setName(e.target.value)}
             />
              
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
             name="email" placeholder="Enter email" 
             value={email}
            onChange={(e)=>setEmail(e.target.value)}
              />
        </Form.Group>
        

        <Button variant="primary" type="submit" 
        onClick={handleupdate}
        >
            update
        </Button>
    </Form>
              </div>
             
             </div>
         
      </div>
    
    </>
  )
}

export default Update2