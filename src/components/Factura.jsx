import React, { useState, useEffect } from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/dashboard.css'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Barco from './Barco'
import { Link } from 'react-router-dom';

export default function Factura() {


    const hostBase = "http://localhost:5000"

    const [listado, setListado] = useState([]);

    
    useEffect(()=>{
        fetch(`${hostBase}/ordenes/listarOrden/factura`,{
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
                    
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Factura</h2>       
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
                                    <th>Precio a cancelar</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                { listado.map(l => 
                                    <tr>
                                        <td key={l.order_id} value={l.order_id}>{l.order_id}</td>
                                        <td key={l.nombre_contenedor} value={l.nombre_contenedor}>{l.nombre_contenedor}</td>
                                        <td key={l.puerto_origen} value={l.puerto_origen}>{l.puerto_origen}</td>
                                        <td key={l.puerto_destino} value={l.puerto_destino}>{l.puerto_destino}</td>
                                        <td key={l.costo} value={l.costo}>{l.costo}</td>
                                        <td key={l.estado_orden} value={l.estado_orden}>{l.estado_orden}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="boatMovement boat-puertos">
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
