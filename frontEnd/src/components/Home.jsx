import React , {useEffect, useState}from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
 
 
import healthInsurenceBg from "../assets/hearthI.png";
import doctorBG from "../assets/newDoctor.png";
import patientBg from "../assets/newPatient.png";

 

export default function Home(props) {

  // just empty space of nothingness for now
  let healthInsurence = <div></div>;
  let doctorButton = <div></div>;
  let patientButton = <div></div>;
  let nothingAllowedIcon = <div></div>;
  

  if (true) {

    doctorButton = 
    <Link to='/doctor'>
      <div
        className='tool'
        style={{ backgroundImage: `url(${doctorBG})` }}
      >
        <div className='tool-menu-wrapTitle'>
          <h1 className='tool-menu-title'>Para Medicos</h1>
          <p className='tool-menu-description'>
            Gerencie sua equipe de medicos com qualidade , rapidez e eficiencia
          </p>
        </div>
        <button className='tool-menu-button purple'>Enter</button>
      </div>
    </Link>
  }

  if (true) {

    healthInsurence = 
      <Link to='/healthInsurence'>          
        <div
            className='tool'
            style={{ backgroundImage: `url(${healthInsurenceBg})` }}
            >
          <div className='tool-menu-wrapTitle'> 
            <h1 className='tool-menu-title'>Convenios</h1>
            <p className='tool-menu-description'>
              Gerencie os convenios de sua clinica e garanta acesso rapido e preços acessíveis a seus clientes.
            </p>
          </div>
          <button className='tool-menu-button green'>Enter</button>
        </div>
      </Link>
  }

  if (true) {

    patientButton = 
      <Link to='/patient'>
        <div
          className='tool'
          style={{ backgroundImage: `url(${patientBg})` }}
        >
          <div className='tool-menu-wrapTitle'>
            <h1 className='tool-menu-title'>Para Pacientes</h1>
            <p className='tool-menu-description'>
                Gerencie seus dados cadastrais , veja exames e faça pagamentos de forma rapida e segura.
            </p>
          </div>
          <button className='tool-menu-button blue'>Enter</button>
        </div>
      </Link>
  }

  return (
     
  

          
          <div className="wrapHomeContainer">
              
               
                    


                    <div className='tool-menu-container'>
                      {doctorButton}
                      {healthInsurence}
                      {patientButton}
                  
                    </div>
                
            </div>
         
   
   
   
  );
}
