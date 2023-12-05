import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Studentedit = (props) => {
    var [inputs,setInputs] =useState(props.data)
    console.log(props.data)
   
const inputHandler = (event) =>{
  const{name,value}=event.target
  setInputs((inputs) => ({...inputs,[name]:value}))
  console.log(inputs)
}

const addHandler =() =>{
  console.log("clicked")
  if(props.method==='put')
  {
console.log(inputs)
  axios.put("http://localhost:4000/edit/"+inputs._id,inputs)
  .then((response) =>{
    alert("Sucess")
    window.location.reload(false);
  })
  .catch(err=>console.log(err))

}
 
 
}
return (
  <div>
    <TextField label="Addmission Number" name="Addmno" value={inputs.Addmno} onChange={inputHandler} variant="standard" /><br></br>
    <TextField  label="Name" name="name" value={inputs.name}onChange={inputHandler} variant="standard" /><br></br>
    <TextField  label="Age" name="Age" value={inputs.Age}onChange={inputHandler} variant="standard" /><br></br>
    
<InputLabel id="demo-simple-select-label" >Course</InputLabel>

  
  <Select label="Course" name="Course" value={inputs.Course} onChange={inputHandler}>
  
  <MenuItem value={"BCA"}>BCA</MenuItem>
  <MenuItem value={"BCOM"}>BCOM</MenuItem>
  <MenuItem value={"BBA"}>BBA</MenuItem>
</Select><br></br><br></br>
<Button variant="contained" onClick={addHandler}>Submit</Button>

  </div>
)
}


  

export default Studentedit
