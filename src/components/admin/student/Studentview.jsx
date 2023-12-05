import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';
const Studentview = () => {
  var[selected,setSelected]=useState()
  var[update,setUpadte]=useState(false)
  var[students,setStudents]=useState([]);

  const updateValues =(row) =>{
    setSelected(row);
    setUpadte(true)
  }
    

    useEffect(()=>{
        axios.get("http://localhost:4000/view")
        .then(response =>{
          setStudents(response.data)
        })
         .catch(err=>console.log(err))
    },[])



var result=
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell >Admission number</TableCell>
            <TableCell > Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Course</TableCell>
            <TableCell >Edit </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row,index) => {
            return(
                <TableRow
                key={index}
             
              >
             <TableCell >{row.Addmno}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.Age}</TableCell>
                <TableCell >{row.Course}</TableCell>
                <TableCell><EditIcon onClick={()=>updateValues(row)}></EditIcon></TableCell>
                
              </TableRow> 
            )
          }
            
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    if(update)
    {console.log(update)

    result=<Studentedit data={selected} method='put'/>
    }
    return(result)
};

export default Studentview
