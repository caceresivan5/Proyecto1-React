import React from 'react'
import "../styles/formulario.css"

const Formulario = () => {
    return (
        <div >
            <h1 className="Formulario-titulo ">SEGUIMIENTO PRODUCCION</h1>
            <p>INGRESE LOS CORTES</p>

            <form>
                <div>
                    <label>Fecha</label>
                    <input type="data" placeholder='Fecha de Ingreso'></input>
                </div>
                <div>
                    <label>Orden de Corte</label>
                    <input type="number" placeholder='Numero de Corte'></input>
                </div>
                <div>
                    <label>Articulo</label>
                    <input type="text" placeholder='Articulo'></input>
                </div>
                <div>
                    <label>Parte Estampada</label>
                    <input type="text" placeholder='Piezas a Estampar'></input>
                </div>
                <div>
                    <label>Cantidad Total</label>
                    <input type="number" placeholder='Cantidad Total'></input>
                </div>
            </form>
        </div>
    )
}

export default Formulario
