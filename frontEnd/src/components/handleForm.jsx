import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,  Link } from "react-router-dom";
 import UserForm from "./userForm";
 import HealthForm from "./healthForm";
 import { addUser , addHealthInsurence} from "./deployData";

export default function HandleForm(props) {
   const title = props.title
   const changeScreen = props.changeScreen

  return (
     
        <aside className="wrapForm">
            <h1 className="formTitle">Cadastro de {title}</h1>

            <Formik
                    initialValues={{ 
                      id: "",
                      name: "",
                      bairro: "",
                      rua: "",
                      numeroCasa: "",
                      complemento: "",
                      CEP: "",
                      email: "",
                      telefone: "",

                     
                      empresa :"",
                      CNPJ : "" ,
                      contact: "" ,
                      homepage: "" ,


                      userType: title
                    
                    }}
                    onSubmit={async (values) => {
                      const newState = {...values}
                      newState.id = uuidv4()
                      for (var propName in newState) {
                        if (newState[propName] === "") {
                          delete newState[propName];
                        }
                      }
                      console.log(newState)
                    const parsedData = JSON.stringify(newState)
                    if(title !=="Convenios" ){
                         addUser(parsedData)
                    } else{
                      addHealthInsurence(parsedData)
                    }
                
                  
                  }}
                >

                  {title === "Convenios"? (
                    <HealthForm changeScreen={changeScreen}/>
                  ):(
                    <UserForm changeScreen={changeScreen}/>
                  )}
                 </Formik>
          <nav>
             
          </nav>
        </aside>
       

        
    
  );
}
