import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/listarPuertos.css'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ListarPuertos() {
    
    const hostBase = "http://localhost:5000"

    var listado = [{"id_puerto":3, "nombre": "Pto Colombia"}, {"id_puerto":5, "nombre": "Pto Cabuyo"}];
    let i;
    let x;
    function listar() {
        let listado;
        fetch(`${hostBase}/puertos/listarPuerto`) // Promesa - Se piden los datos
            .then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
            .then(res => { // Se capturan los datos               
                console.log(res)
                /*for (i in res.puertos) {
                    x = res.puertos[i];
                    listado.push(x)
                }*/
                listado = res
                console.log(listado)
            })
    }
/*
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(`${hostBase}/listarPuerto`) // Promesa - Se piden los datos
            .then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
            .then(res => { // Se capturan los datos  
                setData(res);
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false);
            });             
    }, []);

    if(loading) {
        return <p>Data is loading...</p>;
    }
    
    if (error || !Array.isArray(data)) {
        return <p>There was an error loading data</p>;
    }
*/

    listar();
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Listado de puertos</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1"></div>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2"></div>
                    <div className="u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-white u-shape-3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Puerto</th>
                                </tr>
                            </thead>
                            <tbody>
                                    { listado.map((p) => <tr> 
                                            <td>{p.id_puerto}</td>
                                            <td>{p.nombre}</td>
                                        </tr>)
                                    }
                            </tbody>
                        </table>
                    </div>
                    <h3 className="u-align-center u-custom-font u-font-raleway u-text u-text-default u-text-2-listarPuertos">Actualmente contamos con los siguientes puertos:</h3>
                    <div className="boatMovement">
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
