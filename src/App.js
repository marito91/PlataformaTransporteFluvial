
import Buscar from './components/Buscar';
import CalcularDistancia from './components/CalcularDistancia';
import Contacto from './components/Contacto';
import CostoDeMilla from './components/CostoDeMilla';
import CrearOrden from './components/CrearOrden';
import EditarOrden from './components/EditarOrden';
import Estado from './components/Estado';
import Historial from './components/Historial';
import Inicio from './components/Inicio';
import ListarPuertos from './components/ListarPuertos';
import Login from './components/Login';
import RegistrarPuerto from './components/RegistrarPuerto';
import Registro from './components/Registro';
import RegistroUsuarioExt from './components/RegistroUsuarioExt';
import Servicios from './components/Servicios'
import Cotizaciones from './components/Cotizaciones'
import Factura from './components/Factura'
import BuscarExt from './components/BuscarExt'
import CrearOrdenExt from './components/CrearOrdenExt'
import Invalido from './components/Invalido'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Para correr el front end --> npm start
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro_usuario" element={<Registro />} />
          <Route path="/registro_usuario_ext" element={<RegistroUsuarioExt />} />
          <Route path="/registro_orden" element={<CrearOrden />} />
          <Route path="/registro_puerto" element={<RegistrarPuerto />} />
          <Route path="/editar_orden" element={<EditarOrden />} />
          <Route path="/ordenes" element={<Buscar />} />
          <Route path="/buscador" element={<BuscarExt />} />
          <Route path="/puertos" element={<ListarPuertos/>} />
          <Route path="/configuracion" element={<CostoDeMilla />} />
          <Route path="/calcular_envio" element={<CalcularDistancia />} />
          <Route path="/estado_orden" element={<Estado />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/cotizaciones" element={<Cotizaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="/usuario_invalido" element={<Invalido />} />
          <Route path="/crear_orden" element={<CrearOrdenExt />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
