import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/login.css'
import Barco from './Barco'

export default function Login() {
    return (
        <div>
            <section className="u-clearfix u-custom-color-2 u-valign-middle-xs u-section-1" id="sec-1e56">
                <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                    <Barco className="u-ship" />
                </span>
                <div className="u-form u-form-1 login-form">
                    <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="ingreso" style={{ padding : '10px' }}>
                        <div className="u-form-group u-form-name">
                            <label for="name-40a7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Usuario</label>
                            <input type="text" placeholder="Ingrese usuario" id="name-40a7" name="username" className="u-input u-input-rectangle u-radius-8 u-white" required="" />
                        </div>
                        <div className="u-form-email u-form-group">
                            <label for="email-40a7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Contraseña</label>
                            <input type="email" placeholder="Ingrese contraseña" id="email-40a7" name="password" className="u-input u-input-rectangle u-radius-8 u-white" required="" />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-font u-font-raleway u-hover-custom-color-3 u-none u-radius-10 u-text-active-custom-color-2 u-text-hover-custom-color-2 u-btn-1">Ingresar</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                </div>
                <p className="u-align-right u-custom-font u-font-raleway u-large-text u-text u-text-custom-color-3 u-text-variant u-text-1">¿No tienes cuenta? 
                    <a href="Registro.html" className="u-active-none  u-border-custom-color-3 u-border-hover-white u-btn u-btn-rectangle u-button-style u-custom-font u-font-raleway u-hover-none u-none u-radius-0 u-text-active-white u-text-custom-color-3 u-text-hover-white u-btn-2">Registrarse<span style={{ fontSize : '1.5rem' }}></span>
                    </a>
                </p>
                
            </section>
            <Malecon />
        </div>
    )
}
