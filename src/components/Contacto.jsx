import React from 'react'
import '../static/css/nicepage.css'
import '../static/css/Contacto.css'
import shipContacto from '../static/img/undraw_container_ship_ok-1-c.svg'
import deliveriesContacto from '../static/img/undraw_deliveries_-131-a.svg'
import heavyBoxContacto from '../static/img/undraw_heavy_box_agqi.svg'
import Malecon from './Malecon'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

export default function Contacto() {
    
    const hostBase = "http://localhost:5000"
    console.log();
    function guardar() {
        fetch(`${hostBase}/contacto`, {
            headers:{ "content-type" : "application/json" },
            method:"POST",
            body: JSON.stringify({ nombre:"hola", email:"hola", mensaje:"hola" })
        }).then(data => data.json())
            .then(data => {
            alert(data.msg);
            console.log(data.msg);
        })
    }

    function limpiar() {
        const nombre = document.getElementById("nombre").value = "";
        const email = document.getElementById("email").value = "";
        const mensaje = document.getElementById("mensaje").value = "";
    }
    
    return (
        <>
            <Header />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-1d76">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Contacto</h2>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-2"> ¿Deseas obtener el servicio o simplemente comunicarte con nosotros?<br/>
                        <br/>¡No dudes en ponerte contacto con nosotros a través de nuestros espacios oficiales!
                    </p>
                    <span className="u-file-icon u-icon u-icon-rounded u-opacity u-opacity-40 u-palette-1-base u-spacing-10 u-icon-1">
                        <img src={heavyBoxContacto} alt="" />
                    </span>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-3"> ¡También puedes enviarnos un mensaje! No olvides indicar tu nombre y correo electrónico.</p>
                    <div className="contactForm u-form-contact u-form-1-contact">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="contactForm" style={{padding : '10px' }}>
                            <div className="u-form-group u-form-name">
                                <label for="name-65e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre</label>
                                <input type="text" placeholder="Ingrese nombre y apellido" id="name-65e7" name="contactName" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-white" required="" />
                            </div>
                            <div className="u-form-email u-form-group">
                                <label for="email-65e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Correo electrónico</label>
                                <input type="email" placeholder="Ingrese dirección de correo electrónico" id="email-65e7" name="emailContact" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-white" required="" />
                            </div>
                            <div className="u-form-group u-form-message">
                                <label for="message-65e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Mensaje</label>
                                <textarea placeholder="Ingrese un mensaje con su duda" rows="4" cols="50" id="message-65e7" name="messageContact" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-white" required=""></textarea>
                            </div>
                            <div onClick={guardar} className="u-align-left u-form-group u-form-submit">
                                <a onClick={guardar} href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Enviar</a>
                                <input onClick={guardar} type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-custom-color-2 u-section-2" id="sec-b5e6">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-sheet-1">
                    <span className="u-file-icon u-icon u-icon-circle u-opacity u-opacity-40 u-text-palette-1-base u-icon-1">
                        <img src={deliveriesContacto} alt="" />
                    </span>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-2">
                        <img src={shipContacto} alt="" />
                    </span>
                </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
