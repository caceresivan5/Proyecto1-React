
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaPacientes from './components/ListaPacientes';



function App() {

  return (
   <div className='container mx-auto'>
   <Header/>
   <ListaPacientes/>
   <Formulario/>
   </div>

  );
}

export default App;
