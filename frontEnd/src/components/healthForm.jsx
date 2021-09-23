import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";

import { BrowserRouter as Router,  Link } from "react-router-dom";
 

export default function HealthForm(props) {
   const title = props.title

  return (
     
        
                    <Form className="formContainer">
                 
             
                        <div className="wrapItemForm">
                            <label htmlFor="nome" className="titleScifi">Nome Fantasia</label>
                            <Field name="nome" type="text" className="largerField searchBox"  />
         
                        </div>
                        <div className="wrapItemForm">
                          
        
                            <label htmlFor="empresa" className="titleScifi">Nome Empresa</label>
                            <Field name="empresa" type="text" className="largerField searchBox" />
                        </div>
                        <div  className="wrapItemForm">
                        <label htmlFor="contact" className="titleScifi">Nome Contato</label>
                            <Field name="contact" type="text"    className="searchBox" />

                               <label htmlFor="CNPJ" className="titleScifi">CNPJ</label>
                            <Field name="CNPJ" type="text" className="searchBox"/>

                           
                           
                        </div>

                      <div className="wrapItemForm">
                         <label htmlFor="homepage" className="titleScifi">Homepage</label>
                            <Field name="homepage" type="text"  className="searchBox" />

                        <label htmlFor="telefone" className="titleScifi">Telefone</label>
                        <Field name="telefone" type="text" className="littleField searchBox" />

                      </div>
                 
                  
                        <div className="wrapButtonsForm">
                           <Link to='/'>          
                                        <button className="btnBack">Voltar</button>
                          
                            </Link>
                        
                            <button type="submit" className="btnDeploy">Salvar</button>
                                 
                           
                        </div>
                    </Form>
       
       

        
    
  );
}
