import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';


 
import Home from './components/Home';
import UserComponent from './components/UserComponent';
 

 
const db = [
  {
    route: "patient",
  
      title: "Pacientes",
      addTitle: "Cadastrar Paciente",
      searchTitle: "Gerenciar Paciente",
    
 
  },
  {
    route: "doctor",
      title: "Medicos",
      addTitle: "Cadastrar Medico",
      searchTitle: "Gerenciar Medicos",
  
 
  },
  {
    route: "healthInsurence",
  
      title: "Convenios",
      addTitle: "Cadastrar Convenio",
      searchTitle: "Gerenciar Convenios",
 

  },

]

ReactDOM.render(
  <React.StrictMode>
     <Router>
      
     <Switch>
        
        {db.map(eachRoute =>
          <Route path={`/${eachRoute.route}`}>
                <UserComponent  routeData={eachRoute}/>
          </Route>
        )}
        
        
      
        <Route path='/'>
                <Home/>
         </Route>
          </Switch>
   
  </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
