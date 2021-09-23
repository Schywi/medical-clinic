import React , {useEffect, useState}from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
 
import addBg from "../assets/add.png";
import searchBg from "../assets/searchI.png";

import HandleForm from "./handleForm";
import doctorBG from "../assets/cas.gif";
import Option from "./createOption";
import SearchData from "./searchData";
export default function UserComponent(props) {

  const [add, setAdd] = useState(true)
  const [serach, setSerach] = useState(true)

const routeData = props.routeData
const addTitle =  routeData.addTitle
const title = routeData.title
  const searchTitle = routeData.searchTitle

const changeAdd= (childData) => {
  setAdd(childData)
}

const changeSearch= (childData) => {
  setSerach(childData)
}

  return (
    <div >
          <div className='app-brand'>
                      <Link to='/'>
                  
                        <span className='app-title' style={{ marginRight: "0.3rem" }}>
                          Home | {title}
                        </span>
                      </Link>
             </div>

 
      
            {add && serach? (
              <div className="wrapHomeContainer">
                    <div className='tool-menu-container'>
                                  <Option title={addTitle}  bg={addBg} fatherData={routeData} changeScreen={changeAdd}/>
                                  <Option  title={searchTitle}   bg={searchBg} fatherData={routeData} changeScreen={changeSearch}/>
                              
                                </div>

              </div>
      ):  null}
     {add?null: (
            <div className="routesContainer">
                <HandleForm title={title} changeScreen={changeAdd} />
               
                
                <section className="imageDiv"  style={{ background: `url(${doctorBG})  no-repeat center center fixed` }}>
                          
                          
                      </section>
          </div>
     )}
 
      {serach? null: (
             <SearchData  title={title} changeScreen={changeAdd}/>
     )}
   
        
   
    </div>
  );
}
