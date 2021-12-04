import React from 'react'
import '../static/css/nicepage.css'
import '../static/css/Estado.css'
import Malecon from './Malecon'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Estado() {
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1 u-section-1-estado" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Estado de Orden</h2>
                    <a href="#" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-1">¡Las órdenes son actualizadas en tiempo real!</a>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <Barco />
                    </span>
                    <div className="formRgs u-expanded-width u-form u-form-1 u-form-1-estado">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formStt" style={{ padding: '10px' }}>
                            <div className="u-form-group u-form-name">
                                <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Número de orden</label>
                                <input type="text" id="name-40e7" name="numSt" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                            </div>
                            <div className="u-form-group u-form-textarea u-form-group-2">
                                <label for="textarea-236a" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Estado de la orden</label>
                                <textarea rows="4" cols="50" id="textarea-236a" name="estadoSt" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required=""></textarea>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-2-estado">Buscar</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                    <div style={{ marginLeft : '289px' }}>
                        <a href="#" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-3">
                        <span style={{ fontWeight : '700' }}>Importante:</span> Solamente se podrán editar aquellas órdenes<br/>que no hayan iniciado tránsito.
                        </a>
                        <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-4">Editar Orden</a>
                    </div>
                    </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
