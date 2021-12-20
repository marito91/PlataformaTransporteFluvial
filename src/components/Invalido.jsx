import React from 'react'
import '../static/css/nicepage.css'
import '../static/css/calcularDistancia.css'
import ship from '../static/img/undraw_container_ship_ok-1-c.svg'
import Malecon from './Malecon'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { Link } from 'react-router-dom';

export default function Invalido() {

    return (
        <>
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Oops! &#128532;</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <img src={ship} alt="" />
                    </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-CalcularDistancia">

                    </div>
                    <div className="formRgs u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1 u-form-1-CalcularDistancia">                      
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Parece que no cuentas con los permisos suficientes para acceder a esta página!</label><br/>                               
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1"><Link to="/">Regresar a la página de inicio.</Link></label>                                
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
