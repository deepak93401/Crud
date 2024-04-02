import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

function Spacrud() {
     const [data,setData]=useState({fname:"",lname:""})
     const [product,setProduct]=useState([])
     const [editclick,setEditClick]=useState(false)
     const [editIndex,setEditIndex]=useState("")
     function handlechange(e){
          setData({...data,[e.target.name]:e.target.value})
        //   console.log(data)
     }

     function handelSubmit(e){
        e.preventDefault()
        
        if(editclick){
               const tempproduct=product;
               Object.assign(tempproduct[editIndex],data)
               setProduct([...tempproduct])
        }
        else{
            setProduct([...product,data])
            setData({
                fname:"",
                lname:""
            })
        }
       
      

     }
    //  console.log("product",product)

     function handleDelete(index){
         const filterData=product.filter((item,i)=> i!==index)
         setProduct(filterData)
     }

     function handelEdit(index){
            const tempdata=product[index]
            console.log("tempdata",tempdata)
            setData({
                fname:tempdata.fname,
                lname:tempdata.lname
            })
            setEditClick(true)
            setEditIndex(index)
     }

  return (
    <div className="container ">
    <div className='w-75 m-auto '>
     <form>
        <input type='text' name='fname'
          value={data.fname}
          onChange={handlechange}
        ></input>
       
        <input type='text' name='lname'
         value={data.lname} 
         onChange={handlechange}
        ></input>
        <button type='submit'
         onClick={handelSubmit}
         >
            {editclick?"update":"submit"}
            </button>
    
     </form>

    <Table  bordered hover size="sm" className='mt-5'>
<thead>
<tr>
 <th>id</th>
 <th>fname</th>
 <th>lname</th>
 
 <th>Edit</th>
 <th>delete</th>

 
</tr>
</thead>
<tbody>
 {product.map((item,index)=>(
 
  <tr key={index}>
  <td>{item.fname}</td>
  <td>{item.lname}</td>
  <td><button onClick={()=>handelEdit(index)}>Edit</button></td>
  <td><button onClick={()=>handleDelete(index)}>Delete</button></td>


</tr>


))} 


</tbody>
</Table>

    </div>
</div>
  )
}

export default Spacrud;