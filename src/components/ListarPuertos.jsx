import React, { useState, useEffect } from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/listarPuertos.css'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

//var listado = [{"id_puerto":3, "nombre": "Pto Colombia"}, {"id_puerto":5, "nombre": "Pto Cabuyo"}];
//var lista = [];

export default function ListarPuertos() {
    

    const hostBase = "http://localhost:5000"

    const [listado, setListado] = useState([]);
    
    useEffect(()=>{
        fetch(`${hostBase}/puertos/listarPuerto`,{
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
            <section className="u-clearfix u-custom-color-2 u-section-1 u-section-1-lp section-lp u-sec-1 sec-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Listado de puertos</h2>       
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1 u-shape-1-lp"></div>
                    <div className="sec-1 shape-2 u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2 u-sha-2"></div>
                    <div className="u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-white u-shape-3 sha-3">
                        <table className="tabla-puertos" id="customers">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Puerto</th>
                                    <th>Millas Náuticas</th>
                                </tr>
                            </thead>
                            <tbody>
                                    { listado.map(l => <tr><td key={l.puerto_id} value={l}>{l.puerto_id}</td>
                                            <td key={l.nombre_puerto} value={l}>{l.nombre_puerto}</td>
                                            <td key={l.distancia} value={l}>{l.distancia} nm</td></tr>)
                                    }
                            </tbody>
                        </table>
                    </div>
                    <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-default u-text-2-listarPuertos">Actualmente contamos con los siguientes puertos:</h3>
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
