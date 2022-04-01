import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

function Add() {
  const [formdata, setformdata] = useState({
    name:'',
    email:'',
    mobile :'',
    address:''

  });
  //console.log(formdata);
 const hendlInput = (e)=>{
const name = e.target.name;
const value = e.target.value;
//console.log(name,value);
setformdata({...formdata,[name] : value})
  }
 let navigate = useNavigate();
  function handleSubmit(event)
  {
    //console.log(formdata);
    //navigate('/');
  // const getalldata = async ()=>{
  //    const response = await fetch('http://localhost:8000/students', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formdata)
  //   })
  //  // console.log(response);
  //  }
  //   console.log(getalldata());

  var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://localhost:8000/students', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() { 
  if (xhr.readyState == 4 && xhr.status == 200)
  var validData = JSON.parse(xhr.responseText);
  if(validData.keyPattern.email==1){
    alert("Please enter other email");
    return false;
  }
  if(validData.keyPattern.mobile==1){
    alert("Please enter other mobile");
    return false;
  }

}
xhr.send(JSON.stringify(formdata));
 
    event.preventDefault();
    navigate('/');
   
    

  }
  return (
    <div>
      <div align="center" width='60%'>
      <form onSubmit={handleSubmit}>
      <table align='center'>
        <tr>
          <td>Name : </td>
          <td><input type="text" name="name" onChange={hendlInput } value={formdata.name}/></td>
        </tr>
        <tr>
          <td>Email :</td>
          <td><input type="email" name="email" onChange={hendlInput} value={formdata.email}/></td>
        </tr>
        <tr>
          <td>Address :</td>
          <td><input type="text" name="address" onChange={hendlInput} value={formdata.addr}/></td>
        </tr>
        <tr>
          <td>Mobile :</td>
          <td><input type="text" name='mobile' onChange={hendlInput} value={formdata.mobi} maxLength={10}/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" name='sub'/></td>
        </tr>
      </table>
        
      </form>
      </div>
<div align="center">
        <Link to="/">Home</Link> |||||
        <Link to="/update">update</Link>
      </div>
    </div>
    
  )
}

export default Add