import React , {useEffect, useState}from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
 


 

export default function Option(props) {
        const fatherData = props.fatherData
        const title = props.title
        const bg = props.bg
    
      const changeScreen =   props.changeScreen
      

  return (
    <Link to={`/${fatherData.route}`}>
        <div
        className='tool'
        style={{ backgroundImage: `url(${bg})` }}
        >
        <div className='tool-menu-wrapTitle'>
            <h1 className='tool-menu-title'>{title}</h1>
        </div>
        <button className='tool-menu-button blue' onClick={() => {
            changeScreen(false)
        }}>Enter</button>
        </div>
    </Link>
         
   
   
   
  );
}
