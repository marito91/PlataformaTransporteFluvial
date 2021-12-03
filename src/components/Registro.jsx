import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/Registro.css'
import Barco from './Barco'
import Footer from './Footer'
import Header from './Header'

export default function Registro() {
    return (
        <>
            <Header />
            <section className="u-clearfix u-custom-color-2 u-section-1-registro" id="sec-7127">
                <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Registro</h2>
                
                <div className="formRgs u-form u-form-1">
                    <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formRgs" style={{ padding : '10px' }}>
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre y apellido</label>
                            <input type="text" placeholder="Nombre completo" id="name-40e7" name="nameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Email</label>
                            <input type="text" id="text-c25c" name="emailRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" placeholder="Correo electrónico" required="required" />
                        </div>
                        <div className="u-form-email u-form-group u-form-partition-factor-2">
                            <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Usuario</label>
                            <input type="email" placeholder="Nombre de usuario" id="email-40e7" name="usernameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-4">
                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Contraseña</label>
                            <input type="text" placeholder="Contraseña" id="text-3800" name="passwordRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Registrar</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                
                <div className="u-container-style u-group u-group-1">
                    <div className="u-container-layout">
                    <a href="#" className="u-active-none u-border-2 u-border-active-white u-border-custom-color-3 u-border-hover-white u-btn u-btn-rectangle u-button-style u-custom-font u-font-raleway u-hover-none u-none u-radius-0 u-text-active-white u-text-hover-white u-btn-2">Inicia Sesión</a>
                    <h3 className="u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-2">¿Cuentas con ID?</h3>
                    </div>
                </div>
                <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                    <Barco />
                </span>
                </div>
            </section>
            <Footer />
        </>
    )
}
