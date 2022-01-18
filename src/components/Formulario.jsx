import React from 'react'
import { useState } from 'react/cjs/react.development'
import "../styles/formulario.css"
import Error from '../components/Error'

const Formulario = ({cortes, setCortes }) => {

    const [fecha, setFecha] = useState('');
    const [orden, setOrden] = useState('');
    const [cliente, setCliente] = useState('');
    const [articulo, setArticulo] = useState('');
    const [variante, setVariante] = useState('');
    const [total, setTotal] = useState('');
    const [observaciones, setObservaciones] = useState('');

    const[error, setError] = useState(false);
    
    const handleSubmit = (e)=>{
        //validacion del formulario
        if([fecha, orden, cliente, articulo,variante, total, observaciones].includes('')){ //si hay almenos un elemento de este array vacio
            setError(true)
        }else{
            setError(false)

            const ObjetoCortes = {
                fecha, 
                orden, 
                cliente, 
                articulo, 
                variante,
                total,
                 observaciones
            }
            
            setCortes ([...cortes, ObjetoCortes]) // toma una copia de cortes y le agrega el objeto al setCortes

            //reiniciando el form
            setFecha('');
            setOrden('');
            setCliente('');
            setArticulo('');
            setVariante('');
            setTotal('');
            setObservaciones('');


        }
        e.preventDefault();
    }

    return (
        <div >
            <h1 className="Formulario-titulo ">FORMULARIO DE INGRESO</h1>
            <p className='Formulario-tituloP'>DATOS DE LOS CORTES</p>

               
            <form className='form' onSubmit={ handleSubmit }>
                <div className='form-body'>

                <div className='form-Ingreso'>
                    <label htmlFor='fecha'>Fecha</label>
                    <input id='fecha' value={ fecha } onChange={ (e)=>setFecha(e.target.value)} type="date" placeholder='Fecha de Ingreso'></input>
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
                    <label htmlFor='articulo'>Variante</label>
                    <input  id='articulo' value={ variante } onChange={ (e)=>setArticulo(e.target.value)} type="text" placeholder='Variante'></input>
                </div>
                <div className='form-Ingreso'>
                    <label htmlFor='cantidad'>Cantidad Total</label>
                    <input id='cantidad' value={ total } onChange={ (e)=>setTotal(e.target.value)} type="number" placeholder='Cantidad Total'></input>
                </div>
                </div>

                    <div className='Observaciones-Boton'>
                <div className='form-Ingreso'>
                    <label>OBSERVACIONES</label>
                    <textarea name="" id="" value={observaciones} onChange={(e)=>setObservaciones(e.target.value)} cols="30" rows="10"></textarea>
                </div>
                <input className='Btn-enviar' type="submit" value={'AGREGAR CORTE'}/>
                </div>
            </form>
            { error && <Error /> }
            
            
        </div>
    )
}

export default Formulario
