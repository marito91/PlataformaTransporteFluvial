import React from 'react'
import shipBuscar from '../static/img/undraw_container_ship_ok-1-c.svg'
import '../static/css/buscar.css'
import '../static/css/nicepage.css'
import Malecon from './Malecon'


export default function Buscar() {
    return (
        <>
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Buscar órdenes</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                        <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                            <img src={shipBuscar} alt="" />
                        </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2"> 
                    </div>
                    <div className="formRgs u-expanded-width u-form u-form-1">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formSrch" style={{ padding: '10px' }}>
                            <div className="u-form-group u-form-textarea u-form-group-1">
                                <label for="textarea-deae" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Rastrear</label>
                                <textarea rows="4" cols="50" id="textarea-deae" name="itemSrch" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required=""></textarea>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Buscar</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                            <div className="u-form-send-message u-form-send-success">Órdenes encontradas con éxito.</div>
                            <div className="u-form-send-error u-form-send-message">No se pudieron encontrar los datos. Intente nuevamente.</div>
                            <input type="hidden" value="" name="recaptchaResponse" />
                        </form>
                    </div>
                    <a href="" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-2">Ingrese hasta X pedidos, uno por línea.</a>
                </div>
            </section>
            <Malecon />
        </>
    )
}
