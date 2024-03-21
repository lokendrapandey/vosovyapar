import React, { Component, useEffect } from 'react'
import { Link , useNavigate} from "react-router-dom"


const ProtectedComponent = (props) => {
    const {component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedComponent
