import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {

  const [mydata,setMyData]=useState([])

  function getData(){
    axios.get("https://6602f64a9d7276a75554b5b5.mockapi.io/mydata").then((res)=>{
       console.log(res.data)
       setMyData(res.data)
    })
  }

  function handleDelete(id){
    axios.delete(`https://6602f64a9d7276a75554b5b5.mockapi.io/mydata/${id}`).then(()=>{
         getData()
    })
  }

  function localdata(id,name, email){
     localStorage.setItem("id",id)
     console.log("id",id)
     localStorage.setItem("name",name)

     console.log(name)
     localStorage.setItem("email",email)
  }
  useEffect(()=>{
           
  getData()
  },[])

  return (
    <>
     <h1>Read</h1>
     <Table  bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {mydata.map((item,index)=>(
          
           <tr key={index}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.email}</td>
           <Link to="/update">
          <td><Button variant="success" onClick={()=>localdata(item.id,item.name,item.email)}>Edit</Button></td>  
          </Link>
         <td> <Button variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button></td>   
           
         </tr>
         

        ))}
       
     
      </tbody>
    </Table>
    
    </>
  )
}

export default Read