import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";

import { BrowserRouter as Router,  Link } from "react-router-dom";
 

export default function UserForm(props) {
   const title = props.title
   const changeScreen = props.changeScreen

  return (
     
        
                    <Form className="formContainer">
                 

                        <div className="wrapItemForm ">
                            <label htmlFor="nome" className="titleScifi">Nome</label>
                            <Field name="nome" type="text" className="searchBox" />
        
                            <label htmlFor="bairro" className="titleScifi">Bairro</label>
                            <Field name="bairro" type="text"className="searchBox"  />
                        </div>
                        <div  className="wrapItemForm">
                                <label htmlFor="rua" className="titleScifi">Rua</label>
                            <Field name="rua" type="text" className="searchBox" />

                            <label htmlFor="numeroCasa" className="titleScifi">Numero</label>
                            <Field name="numeroCasa" type="text" className="minorField searchBox"  />

                            <label htmlFor="complemento" className="titleScifi">Complemento</label>
                            <Field name="complemento" type="text" className="minorField searchBox"  />

                        </div>

                      <div className="wrapItemForm">
                          <label htmlFor="CEP" className="titleScifi">CEP</label>
                        <Field name="CEP" type="text" className="littleField searchBox" />

                        <label htmlFor="email" className="titleScifi">Email</label>
                        <Field name="email" type="email"  className="littleField searchBox"/>

                        <label htmlFor="telefone" className="titleScifi">Telefone</label>
                        <Field name="telefone" type="text" className="littleField searchBox" />

                      </div>
                 
                  
                        <div className="wrapButtonsForm">
                                     
                            
                          
                       
                                    <button 
                                    className="btnBack"
                                    onClick={() =>{
                                            changeScreen(true)
                                        }}>Voltar</button>
                         
                            
                        
                            <button type="submit" className="btnDeploy">Salvar</button>
                                 
                   
                        </div>
                    </Form>
       
       

        
    
  );
}
