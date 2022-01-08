import React from 'react'
import "../styles/formulario.css"

const Formulario = () => {
    return (
        <div >
            <h1 className="Formulario-titulo ">SEGUIMIENTO PRODUCCION</h1>
            <p>INGRESE LOS CORTES</p>

            <form className='form'>
                <div className='form-body'>

                <div className='form-Ingreso'>
                    <label>Fecha</label>
                    <input type="data" placeholder='Fecha de Ingreso'></input>
                </div>
                <div className='form-Ingreso'>
                    <label>Orden de Corte</label>
                    <input type="number" placeholder='Numero de Corte'></input>
                </div>
                <div className='form-Ingreso'>
                    <label>Articulo</label>
                    <input type="text" placeholder='Articulo'></input>
                </div>
                <div className='form-Ingreso'>
                    <label>Parte Estampada</label>
                    <input type="text" placeholder='Parte a Estampar'></input>
                </div>
                <div className='form-Ingreso'>
                    <label>Cantidad Total</label>
                    <input type="number" placeholder='Cantidad Total'></input>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario
