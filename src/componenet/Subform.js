import React, { useState } from 'react'

function Subform() {
    const [data,setData]=useState({name:"",contact:""})
    const [fromData,setFormData]=useState([])
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})
        // console.log("data",data);
        


    }
    function submitHandle(e){
      e.preventDefault()
      setFormData([...fromData,data])
      console.log("FormData",fromData);

    }
  return (

   <>
     <from>
         <input type='text' name='name' onChange={handleChange}></input><br></br>
         <input type='text' name='contact' onChange={handleChange}></input><br></br>
         <button onClick={submitHandle}>Submit</button>
     </from>
   
   </>
  )
}

export default Subform;
