import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";

import { BrowserRouter as Router,  Link } from "react-router-dom";
import { TiDeleteOutline} from "react-icons/ti";
import { AiFillEdit} from "react-icons/ai";

import { searchUser, deleteHealthInsurence } from "./deployData";
export default function SearchTableHearth(props) {
    const title = props.title
 
    const changeScreen = props.changeScreen

    const [db,setDb] = useState([])

    useEffect( async () => {
        await  getUserData()
    },[])

         
    const removeUser = async (id, title) => {
        const obj=  { 
            id: id,
          
        };
       await deleteHealthInsurence(obj);
     
        setTimeout(() => { getUserData()},1000)
    }

    const getUserData = async () => {
        const seachData = await searchUser(title)
		console.log("dataSearched", seachData)
        setDb(seachData.data)
    }
  return (
     
          <div className="wrapResult">
                    <h1>Pesquisar {title}</h1>
                
             
                    <div  className="resultTItles">
                        <span>Nome Fantasia</span>
                        <span>Nome Empresa</span>
                        <span>Nome Contato</span>
                        <span>CNPJ</span>
                        <span>Email</span>
                        <span>Telefone</span>
                        <span>Homepage</span>
                    </div>
             

         
  
                {db !== undefined? (
                        <div className="resultContainer">
                        {db.map(user => 

                            <div  className="resultItem">
                                <span>{user.nome}</span>
                                <span>{user.empresa}</span>
                                <span>{user.contact}</span>
                                <span>{user.CNPJ}</span>
                                <span>{user.email}</span>
                                <span>{user.telefone}</span>
                                <span>{user.homepage}</span>
                                <TiDeleteOutline fontSize="1.4em" cursor="pointer"  onClick={ () => {
                                   removeUser(user.id, title)
                                }}/>
                                    < AiFillEdit fontSize="1.4em"  cursor="pointer"  onClick={() => {
                                    changeScreen(false)
                                }}/>
                            </div>
                        )}
                        </div>

                ):null}

               
          </div>
       
     
  );
}
