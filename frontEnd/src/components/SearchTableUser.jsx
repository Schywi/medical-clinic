import React , {useEffect, useState}from "react";
import { Formik, Field, Form } from "formik";

import { BrowserRouter as Router,  Link } from "react-router-dom";
 
import { TiDeleteOutline} from "react-icons/ti";
import { AiFillEdit} from "react-icons/ai";
 
import { searchUser, deleteUser } from "./deployData";
export default function SearchTableUser(props) {
    const title = props.title
 
    const changeScreen = props.changeScreen

    const [db,setDb] = useState([])

    useEffect( async () => {
        await  getUserData()
    },[])

         
    const removeUser = async (id, title) => {
        const obj=  { 
            id: id,
            userType: title
        };
       await deleteUser(obj)
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
                        <span>Nome</span>
                        <span>Bairro</span>
                        <span>Rua</span>
                        <span>CEP</span>
                        <span>Numero</span>
                        <span>Complemento</span>
                        <span>Telefone</span>
                        <span>Email</span>

                    </div>
               

         
  

                    {db !== null? (
                        <div className="resultContainer">
                        {db.map(user => 

                            <div  className="resultItem">
                                <span>{user.nome}</span>
                                <span>{user.bairro}</span>
                                <span>{user.rua}</span>
                                <span>{user.CEP}</span>
                                <span>{user.numeroCasa}</span>
                                <span>{user.complemento}</span>
                                <span>{user.telefone}</span>
                                <span>{user.email}</span>
                                
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
