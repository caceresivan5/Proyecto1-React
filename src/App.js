
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaCortes from './components/ListadoCortes';
import "../src/styles/contenedor-formulario-lista.css"
import "../src/styles/listaCortes.css"
import Footer from './components/Footer';



function App() {

  return (
   <div >
   <Header/>

   <div className='Contenedor-Formulario-lista'>
   <Formulario />
   <ListaCortes />
   </div>
   <Footer/>
   
   </div>

  );
}

export default App;
