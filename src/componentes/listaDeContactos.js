import React, {useEffect, useState} from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import Contacto from "./Contacto";
import {collection, onSnapshot} from "firebase/firestore";
const ListaContactos=()=> {
    const [contactos, cambiarContactos]= useState([])
    useEffect (()=>{
        onSnapshot (collection(db, 'usuarios'),
        (snapshot)=>{
            //console.log('se ejecuto la funcion');
            //console.log(snapshot);
            const arregloUsuarios = snapshot.docs.map((documento)=>{
                return {...documento.data(), id: documento.id}
            })
            cambiarContactos(arregloUsuarios);
            }
        );
    },[])
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