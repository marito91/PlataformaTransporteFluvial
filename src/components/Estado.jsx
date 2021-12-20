import React, { useRef } from 'react'
import '../static/css/nicepage.css'
import '../static/css/Estado.css'
import Malecon from './Malecon'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Estado() {


    const hostBase = "http://localhost:5000"

    const numeroRef = useRef();
    const estadoRef = useRef();
    const nuevoEstadoRef = useRef();

    function buscar() {
        if (numeroRef.current.value === "") {
            alert("Por favor indique el ID de la orden.")
        } else {
            const numero = numeroRef.current.value;
            fetch(`${hostBase}/ordenes/listarOrdenDetalle/${numero}`)
            .then(res => res.json()) 
            .then(res => { 
                if (res.estado === "ok") {
                    alert(res.msg);
                    estadoRef.current.value = `Su orden se encuentra ahora mismo ${res.orden.estado_orden}`;
                } else {
                    alert(res.msg);
                }
            })
        }
    };


    function actualizar() {
        if (numeroRef.current.value === "") {
            alert("Por favor indique el ID de la orden.")
        } else {
            const newEstado = nuevoEstadoRef.current.value;
            const numero = parseInt(numeroRef.current.value);
            fetch(`${hostBase}/ordenes/editarEstado`, {
                headers:{ "content-type" : "application/json" },
                method:"POST",
                body: JSON.stringify({ numero, newEstado })
            }).then(res => res.json()) 
            .then(res => { 
                if (res.estado === "ok") {
                    alert(res.msg);
                } else {
                    alert(res.msg);
                }
            })
        }
    };


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
                                <input ref={numeroRef} type="text" id="name-40e7" name="numSt" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                            </div>
                            <div className="u-form-group u-form-textarea u-form-group-2">
                                <label for="textarea-236a" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Estado actual de la orden</label>
                                <textarea ref={estadoRef} rows="2" cols="50" id="textarea-236a" name="estadoSt" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required=""></textarea>
                            </div>
                            <div className="u-form-group u-form-name">
                                <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nuevo estado</label>
                                <select ref={nuevoEstadoRef} type="text" id="name-40e7" name="numSt" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="">
                                    <option value="Preparando para embarcar">1 - Preparando para embarcar</option>
                                    <option value="Despachada">2 - Despachada</option>
                                    <option value="En tránsito">3 - En tránsito</option>
                                    <option value="Finalizada">4 - Finalizada</option>
                                </select>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a onClick={ buscar } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-2-estado">Buscar</a>
                                <input onClick={ buscar } type="submit" value="submit" className="u-form-control-hidden" />
                                <a onClick={ actualizar } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-2-estado">Actualizar</a>
                                <input onClick={ actualizar } type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                    <div style={{ marginLeft : '289px' }}>
                        <a href="#" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-3">
                        <span style={{ fontWeight : '700' }}>Importante:</span> Solamente se podrán editar aquellas órdenes<br/>que no hayan iniciado tránsito.
                        </a>
                        <Link to="/editar_orden" href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-4">Editar Orden</Link>
                    </div>
                    </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
