import React from 'react'
import '../static/css/crearOrden.css'
import '../static/css/nicepage.css'
import shipCreateOrder from '../static/img/undraw_container_ship_ok-1-c.svg'

export default function CrearOrden() {
    return (
        <>
            <section className="u-clearfix u-custom-color-2 u-hidden-xs u-section-1" id="sec-7127">
                <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                    <img src={shipCreateOrder} alt="" />
                </span>
                <div className="formRgs u-form-crearOrden u-form-1-crearOrden">
                <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Crear Orden</h2>
                    <form action="#" method="POST" className="u-clearfix u-inner-form" source="custom" name="formOrd" style={{ padding : '10px' }}>
                        <div className="u-form-group u-form-name">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre del artículo</label>
                            <input type="text" id="name-40e7" name="nameOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1-crearOrden" required="" />
                        </div>
                        <div className="u-form-email u-form-group u-form-partition-factor-4">
                            <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Alto</label>
                            <input type="email" placeholder="Height" id="email-40e7" name="heightOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2-crearOrden" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-4 u-form-group-3-crearOrden">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Ancho</label>
                            <input type="text" id="text-c25c" name="widthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3-crearOrden" placeholder="Width" required="required" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-4 u-form-group-4-crearOrden">
                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Largo</label>
                            <input type="text" placeholder="Length" id="text-3800" name="lengthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4-crearOrden" required="required" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-4 u-form-group-5-crearOrden">
                            <label for="text-bc62" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-5">Peso</label>
                            <input type="text" placeholder="Weigth" id="text-bc62" name="weigthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5-crearOrden" required="required" />
                        </div>
                        <div className="u-form-group u-form-group-6-crearOrden">
                            <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-6">Puerto Origen</label>
                            <input type="text" id="text-c1c1" name="originDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-6-crearOrden" required="required" />
                        </div>
                        <div className="u-form-group u-form-group-7-crearOrden">
                            <label for="text-cd75" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-7">Puerto Destino</label>
                            <input type="text" id="text-cd75" name="destinationDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-7-crearOrden" required="required" />
                        </div>
                        <div className="u-form-group u-form-textarea u-form-group-8-crearOrden">
                            <label for="textarea-236a" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-8">Descripción</label>
                            <textarea rows="4" cols="50" id="textarea-236a" name="descriptionOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-8-crearOrden" required="" placeholder="Ingrese una breve descripción del producto"></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Crear Orden</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
