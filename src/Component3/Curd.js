import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
// import Kate from "./Component3/Kate.jpg"

function Curd() {
    const [data,setData]=useState([])

    const [mydata,setMyData]=useState({title:"",
    // file:"" ,
    user:""})
    useEffect(()=>{
        axios.get("https://api.slingacademy.com/v1/sample-data/photos").then((res,i)=>{
            //  console.log(res.data.carts)
             setData(res.data.photos)
             
        })
    },[])
    // console.log("data", data)

    function handlechange(e){
       setMyData({...mydata,[e.target.name]:e.target.value})
       console.log(mydata)
    }

    function handelSubmit(e){
        e.preventDefault()
        axios.post("https://api.slingacademy.com/v1/sample-data/photos",mydata)
        .then((res)=>{
                     console.log(res.data.carts)

        }).catch((error)=>{
            console.log(error)
        })


    }

   

  return (
    <>
        <div className="container ">
             <div className='w-75 m-auto '>
              <form>
                 <input type='text' name='title'
                   onChange={handlechange}
                 ></input>
                 {/* <input type='file' name='file'
                  onChange={handlechange}
                 ></input> */}
                 <input type='text' name='user' 
                  onChange={handlechange}
                 ></input>
                 <button type='submit' onClick={handelSubmit}>Submit</button>
                 <button >update</button>
              </form>

             <Table  bordered hover size="sm" className='mt-5'>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>image</th>
          <th>user</th>
          <th>Edit</th>
          <th>delete</th>
         
          
        </tr>
      </thead>
      <tbody>
        {data.map((item,index)=>(
          
           <tr key={index}>
           <td>{item.id}</td>
           <td>{item.title}</td>
           <td><img src={item.url} width="100px" height="100px"></img></td>
           <td>{item.user}</td>
           <td><button>Edit</button></td>
           <td><button>Delete</button></td>
        
         
      </tr>
         

        ))} 
       
     
      </tbody>
    </Table>

             </div>
        </div>
    
    </>
  )
}

export default Curd