
import React,{useState,useEffect} from 'react';
const Main = () => {
   const [myuser,setUser] = useState([]);
  const getAllData = async () => {
   const response = await fetch('http://localhost:8000/students');
    setUser( await response.json());
  }
  useEffect(()=>{
    getAllData();
  }, []);
  return <div>
<h3 style={{textAlign: 'center'}}> Main Header </h3>
<table border={'1'} align={'center'} width={'50%'}>
  <tr>
    <td>Id</td>
    <td>Name</td>
    <td>Email</td>
    <td>Mobile </td>
    <td>Address</td>
  </tr>
  {
    myuser.map((curElement,index)=>{
      return(
        <>
        <tr>
    <td>{index=index+1}.</td>
    <td>{curElement.name}</td>
    <td>{curElement.email}</td>
    <td>{curElement.mobile}</td>
    <td>{curElement.address}</td>
  </tr>
        </>
      )
    })

  }

</table>

  </div>;
};

export default Main;
