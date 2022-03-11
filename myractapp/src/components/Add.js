import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Add() {
  const [formdata, setformdata] = useState({
    name:'',
    email:'',
    addr :'',
    mobi:''

  });
  console.log(formdata);
 const hendlInput = (e)=>{
const name = e.target.name;
const value = e.target.value;
//console.log(name,value);
setformdata({...formdata,[name] : value})
  }
  return (
    <div>hendlInput
      <div align="center" width='60%'>
      <form action="" method="post">
      <table align='center'>
        <tr>
          <td>Name : </td>
          <td><input type="text" name="name" onChange={hendlInput} value={formdata.name}/></td>
        </tr>
        <tr>
          <td>Email :</td>
          <td><input type="text" name="email" onChange={hendlInput} value={formdata.email}/></td>
        </tr>
        <tr>
          <td>Address :</td>
          <td><input type="text" name="addr" onChange={hendlInput} value={formdata.addr}/></td>
        </tr>
        <tr>
          <td>Mobile :</td>
          <td><input type="text" name='mobi' onChange={hendlInput} value={formdata.mobi}/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" name='sub'/></td>
        </tr>
      </table>
        
      </form>
      </div>
<div align="center">
        <Link to="/">Home</Link>
      </div>
    </div>
    
  )
}

export default Add