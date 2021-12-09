import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/Registro.css'
import Barco from './Barco'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function Registro() {
    
    const hostBase = "http://localhost:5000"
    const [usuario, setUsuario] = useState({nombre: "", apellido: "", docType: "", document: "", email: "", userType: "", username: "", password: ""})

    const nombreRef = useRef(); // Hook para agarrar la variable con el atributo de ref dentro de la funcion
    const apellidoRef = useRef();
    const doctTypeRef = useRef();
    const docRef = useRef();
    const emailRef = useRef();
    const userTypeRef = useRef();
    const userRef = useRef();
    const passRef = useRef();
    const registro = () => {
        // Captura los datos de las cajas de texto
        const nombreRef = nombreRef.current.value;
        const apellidoRef = apellidoRef.current.value;
        const doctTypeRef = doctTypeRef.current.value;
        const docRef = docRef.current.value;
        const emailRef = emailRef.current.value;
        const userTypeRef = userTypeRef.current.value;
        const userRef = userRef.current.value;
        const passRef = passRef.current.value;

        setUsuario({nombre: nombreRef, apellido: apellidoRef, docType: doctTypeRef, document: docRef, email: emailRef, userType: userTypeRef, username: userRef, password: passRef});
    }

    function registrar() {
        //fetch(`${hostBase}/contacto`, {
        fetch("http://localhost:5000/registrarUsuario", {
            headers:{ "content-type" : "application/json" },
            method:"POST",
            body: JSON.stringify(usuario)
        }).then(data => data.json())
            .then(data => {
            alert(data.msg);
            console.log(data.msg);
        })
        console.log(usuario);
    }

    function consultar() {
        // Peticion AJAX
        const documento = docRef.current.value; // Agarra el valor del input nombre para buscar
        fetch(`http://localhost:5000/listarUsuario`) // Promesa - Se piden los datos
            .then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
            .then(res => { // Se capturan los datos
                if (res.estado == "ok") {
                    nombreRef.current.value = res.data.nombre;
                    apellidoRef.current.value = res.data.apellido;
                    doctTypeRef.current.value = res.data.tipo_documento;
                    docRef.current.value = res.data.numero_documento;
                    emailRef.current.value = res.data.email;
                    userTypeRef.current.value = res.data.perfil;
                    userRef.current.value = res.data.user;
                    passRef.current.value = res.data.pass;
                    alert(res.mensaje)
                }else{
                    alert(res.mensaje)
                }
            })
    }
    
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1-registro" id="sec-7127">
                <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Registro</h2>
                
                <div className="formRgs u-form u-form-1">
                    <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formRgs" style={{ padding : '10px' }}>
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre</label>
                            <input ref={nombreRef} type="text" placeholder="Nombre" id="name-40e7" name="nameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Apellido</label>
                            <input ref={apellidoRef} type="text" id="text-c25c" name="emailRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" placeholder="Apellidos" required="required" />
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Tipo de documento</label>
                            <select ref={doctTypeRef} type="text" placeholder="Tipo de documento" id="name-40e7" name="nameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="">
                                <option value="Item 1">-</option>
                                <option value="Item 2">C.C</option>
                                <option value="Item 3">C.E</option>
                                <option value="Item 4">NIT</option>
                            </select>
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Número de documento</label>
                            <input ref={docRef} type="text" placeholder="Documento sin espacios o puntos" id="name-40e7" name="nameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Email</label>
                            <input ref={emailRef} type="text" id="text-c25c" name="emailRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" placeholder="Correo electrónico" required="required" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Tipo de Usuario</label>
                            <select ref={userTypeRef} type="text" id="text-c25c" name="emailRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" placeholder="Correo electrónico" required="required">
                                <option value="Item 1">-</option>
                                <option value="Item 2">1 - Administrador</option>
                                <option value="Item 3">2 - Usuario</option>
                            </select>
                        </div>
                        <div className="u-form-email u-form-group u-form-partition-factor-2">
                            <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Usuario</label>
                            <input ref={userRef} type="email" placeholder="Nombre de usuario" id="email-40e7" name="usernameRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-4">
                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Contraseña</label>
                            <input ref={passRef} type="text" placeholder="Contraseña" id="text-3800" name="passwordRgs" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a onClick={ registro, registrar } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Registrar</a>
                            <input onClick={ registro, registrar } type="submit" value="submit" className="u-form-control-hidden" />
                            <a onClick={ registro, consultar } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Consultar</a>
                            <input onClick={ registro, consultar } type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                
                <div className="u-container-style u-group u-group-1">
                    <div className="u-container-layout">
                    <Link to="/" href="#" className="u-active-none u-border-2 u-border-active-white u-border-custom-color-3 u-border-hover-white u-btn u-btn-rectangle u-button-style u-custom-font u-font-raleway u-hover-none u-none u-radius-0 u-text-active-white u-text-hover-white u-btn-2">Inicia Sesión</Link>
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
