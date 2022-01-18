
import "../styles/header.css"

function Header (){
    return(
        <>
        <div className="resumen">
           
            <h2>ACUMULADOS</h2>
            <div className="contenedorResumen">  
            <div className="ResumenDatos">
            <p>CORTES</p>
            <p><span>542</span></p>
            </div>
            <div className="ResumenDatos">
            <p>ESTAMPAS </p>
            <p><span>7651</span></p>
            </div>
            </div>
        </div>
    </>
    )
}

export default Header
