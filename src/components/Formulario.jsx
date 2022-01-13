import React from 'react'
import "../styles/formulario.css"

const Formulario = () => {
    return (
        <div >
            <h1 className="Formulario-titulo ">FORMULARIO DE INGRESO</h1>
            <p className='Formulario-tituloP'>DATOS DE LOS CORTES</p>

            <form className='form'>
                <div className='form-body'>

                <div className='form-Ingreso'>
                    <label htmlFor='fecha'>Fecha</label>
                    <input id='fecha' type="number" placeholder='Fecha de Ingreso'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='ordenCorte' >Orden de Corte</label>
                    <input id='ordenCorte' type="number" placeholder='Numero de Corte'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='cliente'>Cliente</label>
                    <input id='cliente' type="text" placeholder='Cliente'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='articulo'>Articulo</label>
                    <input  id='articulo' type="text" placeholder='Articulo'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='cantidad'>Cantidad Total</label>
                    <input id='cantidad' type="number" placeholder='Cantidad Total'></input>
                </div>
                <input className='Btn-enviar' type="submit" />
                </div>
            </form>
            
        </div>
    )
}

export default Formulario
