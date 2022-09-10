import React, {useState} from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import Contacto from "./Contacto";

const ListaContactos=()=> {
    const [contactos, cambiarContactos]= useState([
        {id:1,nombre:'x',correo:'y',
        id:2,nombre:'y',correo:'x'
        }
    ])
    return (
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto)=>(
                <Contacto 
                key={contacto.id}
                id= {contacto.id}
                nombre={contacto.nombre}
                correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
    );
}
const ContenedorContactos= styled.div`
marggin-top: 40px`
export default ListaContactos;