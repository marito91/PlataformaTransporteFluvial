import React from 'react'
import '../static/css/crearOrden.css'
import '../static/css/nicepage.css'
import shipCreateOrder from '../static/img/undraw_container_ship_ok-1-c.svg'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Malecon from './Malecon'
import { Link, Navigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Invalido from './Invalido'
import { auth } from '../auth/auth';

export default function CrearOrden() {

    const hostBase = "http://localhost:5000"
    const localBase = "http://localhost:3000"

    // Hooks para agarrar la variables con el atributo de ref dentro de la funcion
    const userRef = useRef(); 
    const articuloRef = useRef(); 
    const altoRef = useRef();
    const anchoRef = useRef();
    const largoRef = useRef();
    const pesoRef = useRef();
    const origenRef = useRef();
    const destinoRef = useRef();
    const descripcionRef = useRef();


    // Seccion para cargar los puertos en los select fields
    const [listado, setListado] = useState([]);

    useEffect(()=>{
        fetch(`${hostBase}/puertos/listarPuerto`,{
            method:"POST"
        }).then(res => res.json())
        .then(res => {
            if (res.estado === "ok"){
                setListado(res.data);
            }              
        })
    }, []);
        
    function crearOrden() {
        const resp = window.confirm("¿Está seguro que desea enviar la orden?");
        if (resp) {
            const art = articuloRef.current.value;
            const user = userRef.current.value;
            const height = parseInt(altoRef.current.value);
            const width = parseInt(anchoRef.current.value);
            const length = parseInt(largoRef.current.value);
            const weight = parseInt(pesoRef.current.value);
            const descr = descripcionRef.current.value;
            const origen = origenRef.current.value;
            const destino = destinoRef.current.value;
            if (origen === destino) {
                alert("Los puertos ingresados deben ser diferentes.")
            } else if (userRef.current.value === "") {
                alert("Por favor ingrese el usuario.")
            } else {
                fetch(`${hostBase}/ordenes/registrarOrden`, {
                    headers:{ "content-type" : "application/json" },
                    method:"POST",
                    body: JSON.stringify({ user, art, height, width, length, weight, origen, destino, descr })
                }).then(res => res.json())
                    .then(res => {
                        console.log(res.msg)
                        if (res.estado === "ok") {
                            alert(res.msg);
                            limpiar();
                            window.location.href = `${localBase}/factura`;
                        }
                })
            }
        }
    };

    // Funcion para borrar los text fields apenas se registren los datos
    function limpiar() {
        userRef.current.value ="";
        articuloRef.current.value = "";
        altoRef.current.value = "";
        anchoRef.current.value = "";
        largoRef.current.value = "";
        pesoRef.current.value = "";
        origenRef.current.value = "";
        destinoRef.current.value = "";
        descripcionRef.current.value = "";
    }
    
    return (
        <>
            <Header />

            { auth() ? 
                <>
                    <Menu />
                    <section className="u-clearfix u-custom-color-2 u-hidden-xs u-section-1-CrearOrden" id="sec-7127">
                        <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                            <img src={shipCreateOrder} alt="" />
                        </span>
                        <div className="formRgs u-form-crearOrden u-form-1-crearOrden">
                            <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1-crearOrden">Crear Orden</h2>
                            <form action="#" method="POST" className="u-clearfix u-inner-form" source="custom" name="formOrd" style={{ padding : '10px' }}>
                                <div className="u-form-group u-form-name">
                                    <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre del artículo</label>
                                    <input ref={articuloRef} type="text" id="name-40e7" name="nameOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1-crearOrden" required="" />
                                    <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Usuario</label>
                                    <input ref={userRef} placeholder="Ingrese su usuario" type="text" id="name-40e7" name="nameOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1-crearOrden" required="" />
                                </div>
                                <table style={{ width : '100%' }}>
                                    <tr>
                                        <td>
                                            <div className="u-form-group-crearOrden u-form-name">
                                                <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Alto</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-3-crearOrden" style={{ padding : '-50px' }}>
                                                <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Ancho</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-4-crearOrden">
                                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Largo</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-5-crearOrden">  
                                                <label for="text-bc62" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-5">Peso</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input ref={altoRef} type="email" placeholder="Height (m)" id="email-40e7" name="heightOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2-crearOrden" required="" />
                                        </td>
                                        <td>
                                            <input ref={anchoRef} type="text" id="text-c25c" name="widthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3-crearOrden" placeholder="Width (m)" required="required" />
                                        </td>
                                        <td>
                                            <input ref={largoRef} type="text" placeholder="Length (m)" id="text-3800" name="lengthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4-crearOrden" required="required" />
                                        </td>
                                        <td>
                                            <input ref={pesoRef} type="text" placeholder="Weight (t)" id="text-bc62" name="weigthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5-crearOrden" required="required" />
                                        </td>
                                    </tr>
                                </table>                       
                                <div className="u-form-group u-form-group-6-crearOrden">
                                    <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-6">Puerto Origen</label>
                                    <select ref={origenRef} type="text" id="text-c1c1" name="originDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-6-crearOrden" required="required">
                                        <option value="">-- Seleccione puerto de origen --</option>
                                        {
                                            listado.map(l => <option key={l.puerto_id} value={l.nombre_puerto}>{l.nombre_puerto}</option>)
                                        }
                                    </select>
                                
                                
                                </div>
                                <div className="u-form-group u-form-group-7-crearOrden">
                                    <label for="text-cd75" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-7">Puerto Destino</label>
                                    <select ref={destinoRef} type="text" id="text-cd75" name="destinationDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-7-crearOrden" required="required">
                                        <option value="">-- Seleccione puerto de destino --</option>
                                            {
                                                listado.map(l => <option key={l.puerto_id} value={l.nombre_puerto}>{l.nombre_puerto}</option>)
                                            }
                                    </select>
                                </div>
                                <div className="u-form-group u-form-textarea u-form-group-8-crearOrden">
                                    <label for="textarea-236a" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-8">Descripción</label>
                                    <textarea ref={descripcionRef} rows="4" cols="50" id="textarea-236a" name="descriptionOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-8-crearOrden" required="" placeholder="Ingrese una breve descripción del producto"></textarea>
                                </div>
                                <div className="u-align-left u-form-group u-form-submit">
                                    <a onClick={ crearOrden } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Crear Orden</a>
                                    <input onClick={ crearOrden } type="submit" value="submit" className="u-form-control-hidden" />
                                </div> 
                            </form>
                        </div>
                    </section>
                </>
                    : <Invalido />
            }
            <Malecon />
            <Footer />
        </>
    )
}
