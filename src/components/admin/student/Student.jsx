import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  const navigate =useNavigate();
  var [inputs,setInputs] =useState({
    "Addmno":'',
    "name":'',
    "Age":'',
    "Course":''
  });


   var[selectedimage,setSelectedimage]=useState(null);

  const inputHandler = (event) =>{
    const{name,value}=event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const handleimage=(event)=>{
    const file =event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
   }

  // const addHandler =() =>{
  //   console.log("clicked")
  //   console.log(inputs)
  //   axios.post("http://localhost:4000/new",inputs)
  //   .then((response) =>{
  //     alert("Record Saved")
  //   })
  //   .catch(err=>console.log(err))
  
  // }

   const saveData=()=>{
    const formdata= new FormData();
    formdata.append('Addmno',inputs.Addmno);
    formdata.append('name',inputs.name);
    formdata.append('Age',inputs.Age);
    formdata.append('Course',inputs.Course);
    formdata.append('image1',selectedimage);

    fetch('http://localhost:4000/new',{
      method:'post',
    body:formdata,
  })

   .then((response)=>response.json())
   .then((data)=>{

    alert("record saved")
   })

    .catch((err)=>{
      console.log("error")
    })

   }
   
   
   const viewHandler =() =>
   {
    navigate('/studentview');
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
  </Select><br></br>
  <label>Choose file to upload</label>
<input type="file" onChange={handleimage}></input>
<br></br>
  <Button variant="contained" onClick={saveData}>Submit</Button>
  <Button variant="contained" onClick={viewHandler}>view</Button>
    </div>
  );
}

export default Student
