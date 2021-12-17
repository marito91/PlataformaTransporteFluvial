import React, { useState, useEffect } from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/dashboard.css'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Barco from './Barco'
import { Link } from 'react-router-dom';

export default function Inicio() {


    const hostBase = "http://localhost:5000"

    const [listado, setListado] = useState([]);
    const [orderList, setOrderList] = useState([]);

    
    useEffect(()=>{
        fetch(`${hostBase}/ordenes/listarOrden`,{
            method:"POST"
        }).then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
        .then(res => { // Se capturan los datos 
            if (res.estado === "ok"){
                setListado(res.data);
            }              
        })
    }, []);

    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1 u-section-1-lp section-dashboard u-sec-1 sec-1 u-section-1-db u-sec-db sec-db" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Bienvenido,</h2>       
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1 u-shape-1-db"></div>
                    <div className="sec-1 shape-2 u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2 u-sha-db"></div>
                    <div className="u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-white sha-3-db">
                        <table className="tabla-puertos" id="customers">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Puerto Origen</th>
                                    <th>Puerto Destino</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                { listado.map(l => 
                                    <tr>
                                        <td key={l.id_orden} value={l}>{l.id_orden}</td>
                                        <td key={l.articulo} value={l}>{l.articulo}</td>
                                        <td key={l.puerto_origen} value={l}>{l.puerto_origen}</td>
                                        <td key={l.puerto_destino} value={l}>{l.puerto_destino}</td>
                                        <td key={l.estado_orden} value={l}>{l.estado_orden}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div className="dashboard-btns u-align-left u-form-group u-form-submit">
                            <Link to="/registro_usuario">
                                <a href="#" className="db-btn buttons-registro u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Mis Datos</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </Link>
                            <Link to="/">
                                <a href="#" className="db-btn buttons-registro u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Cerrar Sesión</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </Link>
                        </div>
                    </div>
                    <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-default u-text-2-inicio title">Tus últimas órdenes fueron:</h3>
                    <div className=" boat-puertos-dash">
                        <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                            <Barco />
                        </span>
                    </div>             
                </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
