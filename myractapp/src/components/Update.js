import React from 'react'
import {useNavigate} from "react-router-dom";

function Update() {
    let navigate = useNavigate();
function awani(){
    navigate('/add');
}
   
  return (
    <>Update

        {/* <Link to="/">Home</Link> |||||
        <Link to="/add">add</Link> */}

        <input type="button" value="click" onClick={awani}/>
    </>
  )
}

export default Update


