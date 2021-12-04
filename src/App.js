import Barco from './components/Barco';
import Buscar from './components/Buscar';
import CalcularDistancia from './components/CalcularDistancia';
import Contacto from './components/Contacto';
import CostoDeMilla from './components/CostoDeMilla';
import CrearOrden from './components/CrearOrden';
import EditarOrden from './components/EditarOrden';
import Estado from './components/Estado';
// Se importaron directamente dentro de cada componente
// import Footer from './components/Footer';
// import Header from './components/Header';
import Historial from './components/Historial';
import Inicio from './components/Inicio';
import ListarPuertos from './components/ListarPuertos';
import Login from './components/Login';
import Malecon from './components/Malecon';
import RegistrarPuerto from './components/RegistrarPuerto';
import Registro from './components/Registro';
import Servicios from './components/Servicios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro_usuario" element={<Registro />} />
          <Route path="/registro_orden" element={<CrearOrden />} />
          <Route path="/registro_puerto" element={<RegistrarPuerto />} />
          <Route path="/editar_orden" element={<EditarOrden />} />
          <Route path="/ordenes" element={<Buscar />} />
          <Route path="/puertos" element={<ListarPuertos/>} />
          <Route path="/configuracion" element={<CostoDeMilla />} />
          <Route path="/calcular_envio" element={<CalcularDistancia />} />
          <Route path="/estado_orden" element={<Estado />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
