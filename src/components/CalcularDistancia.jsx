import React from 'react'
import '../static/css/nicepage.css'
import '../static/css/calcularDistancia.css'
import ship from '../static/img/undraw_container_ship_ok-1-c.svg'
import Malecon from './Malecon'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { Link } from 'react-router-dom';

export default function CalcularDistancia() {
    
    
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Calcular Distancia</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <img src={ship} alt="" />
                    </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-CalcularDistancia">

                    </div>
                    <div className="formRgs u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1 u-form-1-CalcularDistancia">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formDist" style={{padding : '10px' }}>
                            <div className="u-form-group u-form-name u-form-partition-factor-2">
                                <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Puerto Origen</label>
                                <input type="text" id="name-40e7" name="originDockDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" placeholder="Ingrese puerto de origen" />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                                <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Puerto Destino</label>
                                <input type="text" id="text-c1c1" name="destinationDockDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required="required" placeholder="Ingrese puerto de destino" />
                            </div>
                            <div className="u-form-email u-form-group u-form-partition-factor-2">
                                <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Distancia</label>
                                <input type="email" id="email-40e7" name="distanceDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" required="" />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-4">
                                <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Valor a pagar</label>
                                <input type="text" id="text-c25c" name="priceDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Calcular</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                            <div className="u-form-send-message u-form-send-success">Puertos identificados con éxito.</div>
                            <div className="u-form-send-error u-form-send-message">No se pudo identificar la distancia. Intente nuevamente.</div>
                                <input type="hidden" value="" name="recaptchaResponse" />
                        </form>
                        <a href="" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-2-calcularDistancia">El valor actual por milla náutica es de COP $ X.XX o USD &amp; X.XX</a>
                    </div>
                </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
