import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/registrarPuerto.css'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function RegistrarPuerto() {
    
    const hostBase = "http://localhost:5000"
    //const [usuario, setUsuario] = useState({nombre: "", apellido: "", docType: "", document: "", email: "", userType: "", telefono: "", password: ""})

    // Hooks para agarrar la variables con el atributo de ref dentro de la funcion
    const nomPtoRef = useRef(); 
    const idPtoRef = useRef();
    const distPtoRef = useRef();
    const munPtoRef = useRef();
    const rioPtoRef = useRef();

    function registrarPto() {
        const nomPto = nomPtoRef.current.value;
        const idPto = idPtoRef.current.value;
        const distPto = distPtoRef.current.value;
        const munPto = munPtoRef.current.value;
        const rioPto = rioPtoRef.current.value;

        fetch(`${hostBase}/puertos/registrarPuerto`, {
            headers:{ "content-type" : "application/json" },
            method:"POST",
            body: JSON.stringify({nomPto, idPto, distPto, munPto, rioPto})
        }).then(data => data.json())
            .then(data => {
            alert(data.msg);
            console.log(data.msg);
        })
        console.log({nomPto, idPto, distPto, munPto, rioPto});
        limpiar();

    }

    // Funcion para borrar los text fields apenas se registren los datos
    function limpiar() {
        nomPtoRef.current.value = "";
        idPtoRef.current.value = "";
        distPtoRef.current.value = "";
        munPtoRef.current.value = "";
        rioPtoRef.current.value = "";
    }




    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1-registrarPuerto" id="sec-7127">
                <div className="formRgs u-form u-form-1-registrarPuerto">
                <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Registro de Puertos</h2>
                    <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formDock" style={{ padding: '10px' }}>
                        <div className="u-form-group u-form-name">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre del puerto</label>
                            <input ref={nomPtoRef} type="text" id="name-40e7" name="nameDock" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                        </div>
                        <div className="u-form-email u-form-group u-form-partition-factor-2">
                            <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">ID del puerto</label>
                            <input ref={idPtoRef} type="email" id="email-40e7" name="idDock" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required="" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-3">
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Millas navegables</label>
                            <input ref={distPtoRef} type="text" id="text-c25c" name="milesDock" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" required="required" />
                        </div>
                        <div className="u-form-group u-form-group-4">
                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Municipio</label>
                            <input ref={munPtoRef} type="text" id="text-3800" name="cityDock" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                        </div>
                        <div className="u-form-group u-form-group-5">
                            <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-5">Cuerpo Marítimo - Fluvial</label>
                            <input ref={rioPtoRef} type="text" id="text-c1c1" name="riverDock" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5" required="required" />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <a onClick={ registrarPto } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Registrar</a>
                            <input onClick={ registrarPto } type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                    </form>
                </div>
                <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                    <Barco />
                </span>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
