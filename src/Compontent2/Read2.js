import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Read2() {
    const [read,setRead]=useState([])

    function getData(){
        axios.get("https://6602f64a9d7276a75554b5b5.mockapi.io/Myapp")
        .then((res)=>{
              console.log(res.data)
              setRead(res.data)
        })

    }

     useEffect(()=>{
        getData()
    },[])

  
      function handleDelete(id){
        axios.delete(`https://6602f64a9d7276a75554b5b5.mockapi.io/Myapp/${id}`)
        .then(()=>{
             getData()
        })

      }  

      function localdata(id,name,email){
      
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
      }




  return (
    <>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>

      <tbody>
        {read.map((item,i)=>(
             <tr key={i}>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.email}</td>
          
             <td>
             <Link to="/update">
                <button onClick={()=>localdata(item.id,item.name,item.email)}>Edit</button>
                </Link>
                </td>
         
            
             <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>

            
           </tr>

        ))}
       

      </tbody>
    </Table>
    
    </>
  )
}

export default Read2