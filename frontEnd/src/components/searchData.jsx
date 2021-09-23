import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";

import { BrowserRouter as Router,  Link } from "react-router-dom";
 import SearchTableHearth from "./SearchTableHearth";
 import SearchTableUser from "./SearchTableUser";
import { searchUser } from "./deployData";
export default function SearchData(props) {
    const title = props.title
    
    const changeScreen = props.changeScreen
    
   
 
 
  return (
      <div >

            {title === "Convenios"?(
                    <SearchTableHearth title={title} changeScreen={changeScreen} />
            ): (
                <SearchTableUser title={title} changeScreen={changeScreen} />
            )
            }
         </div>
     
  );
}
