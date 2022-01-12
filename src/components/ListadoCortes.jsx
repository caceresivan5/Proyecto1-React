import React from 'react'
import "../styles/listaCortes.css"
import Cortes from '../components/Cortes'

const ListaCortes = () => {
    return (
        <div className='ListaCortes'>
            <h1 className="tituloListaCortes">LISTADO DE CORTES</h1>
            <p className='tituloListaCortesAdministralos'>ADMINISTRALOS</p>
            <Cortes/>
            <Cortes/>
            <Cortes/>
            <Cortes/>
            <Cortes/>
       
            
        </div>
    )
}

export default ListaCortes
