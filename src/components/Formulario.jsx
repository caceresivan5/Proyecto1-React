import React from 'react'
import { useState } from 'react/cjs/react.development'
import "../styles/formulario.css"

const Formulario = () => {

    const [fecha, setFecha] = useState('');
    const [orden, setOrden] = useState('');
    const [cliente, setCliente] = useState('');
    const [articulo, setArticulo] = useState('');
    const [total, setTotal] = useState('');
    const [observaciones, setObservaciones] = useState('');

    const[error, setError] = useState(false);
    
    const handleSubmit = (e)=>{
        //validacion del formulario
        if([fecha, orden, cliente, articulo, total, observaciones].includes('')){ //si hay almenos un elemento de este array vacio
            setError(true)
        }else{
            setError(false)
            console.log('INGRESADO')
        }
        e.preventDefault();
        console.log('enviando...')
    }

    return (
        <div >
            <h1 className="Formulario-titulo ">FORMULARIO DE INGRESO</h1>
            <p className='Formulario-tituloP'>DATOS DE LOS CORTES</p>

               
            <form className='form' onSubmit={ handleSubmit }>
                <div className='form-body'>

                <div className='form-Ingreso'>
                    <label htmlFor='fecha'>Fecha</label>
                    <input id='fecha' value={ fecha } onChange={ (e)=>setFecha(e.target.value)} type="number" placeholder='Fecha de Ingreso'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='ordenCorte' >Orden de Corte</label>
                    <input id='ordenCorte' value={ orden } onChange={ (e)=>setOrden(e.target.value)} type="number" placeholder='Numero de Corte'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='cliente'>Cliente</label>
                    <input id='cliente' value={ cliente } onChange={ (e)=>setCliente(e.target.value)} type="text" placeholder='Cliente'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='articulo'>Articulo</label>
                    <input  id='articulo' value={ articulo } onChange={ (e)=>setArticulo(e.target.value)} type="text" placeholder='Articulo'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='cantidad'>Cantidad Total</label>
                    <input id='cantidad' value={ total } onChange={ (e)=>setTotal(e.target.value)} type="number" placeholder='Cantidad Total'></input>
                </div>
                <div>
                    <label>OBSERVACIONES</label>
                    <textarea name="" id="" value={observaciones} onChange={(e)=>setObservaciones(e.target.value)} cols="30" rows="10"></textarea>
                </div>
                <input className='Btn-enviar' type="submit" value={'AGREGAR CORTE'}/>
                </div>
            </form>
            { error && <div className='ValidacionForm'>TODOS LOS CAMPOS SON OBLIGATORIOS</div> }
            
            
        </div>
    )
}

export default Formulario
