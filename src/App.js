
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaCortes from './components/ListadoCortes';
import "../src/styles/contenedor-formulario-lista.css"
import "../src/styles/listaCortes.css"



function App() {

  return (
   <div className='container mx-auto'>
   <Header/>

   <div className='Contenedor-Formulario-lista'>
   <Formulario />
   <ListaCortes />
   </div>
   
   </div>

  );
}

export default App;
