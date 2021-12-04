import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/listarPuertos.css'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function ListarPuertos() {
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Listado de puertos</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1"></div>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2"></div>
                    <div className="u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-white u-shape-3"></div>
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
