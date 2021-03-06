import React, { useRef, useEffect, useState } from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/editarOrden.css'
import Barco from './Barco'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Invalido from './Invalido'
import { auth } from '../auth/auth';

export default function EditarOrden() {

    const hostBase = "http://localhost:5000"

    // Hooks para agarrar la variables con el atributo de ref dentro de la funcion
    const numeroRef = useRef();
    const articuloRef = useRef(); 
    const estadoRef = useRef(); 
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


    function editarOrden() {
        if (numeroRef.current.value === "") {
            alert("Debe ingresar un numero de orden para continuar con este proceso")
        } else {
            const resp = window.confirm("¿Está seguro que desea EDITAR la orden?");
            if (resp) {
                // Se toman los valores
                const art = articuloRef.current.value;
                const numero = parseInt(numeroRef.current.value);
                const height = parseInt(altoRef.current.value);
                const width = parseInt(anchoRef.current.value);
                const length = parseInt(largoRef.current.value);
                const weight = parseInt(pesoRef.current.value);
                const descr = descripcionRef.current.value;
                const origen = origenRef.current.value;
                const destino = destinoRef.current.value;
                fetch(`${hostBase}/user/editarUsuario`, {
                    headers:{ "content-type" : "application/json" },
                    method:"POST",
                    body: JSON.stringify({ numero, art, height, width, length, weight, origen, destino, descr }) // Promesa - Se piden los datos
                }).then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
                .then(res => { // Se capturan los datos
                    alert(res.msg)
                })
                limpiar();
            }
        }

    }

    // Funcion para borrar los text fields apenas se registren los datos
    function limpiar() {
        articuloRef.current.value = "";
        numeroRef.current.value = "";
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
                    <section className="u-clearfix u-custom-color-2 u-section-1 section-1-editarOrden" id="sec-7127">
                        <div className="u-clearfix u-sheet u-valign-middle-sm u-sheet-1">
                            <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Editar Orden</h2>
                            <a href="" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-1-editarOrden">
                                <span style={{ fontWeight : '700' }}>Importante:</span> Solamente se podrán editar aquellas órdenes<br/>que no hayan iniciado tránsito.
                            </a>
                            <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                                <Barco />
                            </span>
                            <div className="formRgs u-expanded-width-sm u-expanded-width-xs u-form u-form-1 form-1-editarOrden">
                                <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formEdit" style={{ padding : '10px' }}>
                                    <div className="u-form-group u-form-name">
                                        <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">ID de la Orden</label>
                                        <input ref={numeroRef} type="text" id="name-40e7" name="nameEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                                    </div>
                                    <div className="u-form-group u-form-name">
                                        <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre del artículo</label>
                                        <input ref={articuloRef} type="text" id="name-40e7" name="nameEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                                    </div>
                                    <div className="u-form-email u-form-group u-form-partition-factor-4">
                                        <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Alto</label>
                                        <input ref={altoRef} type="email" placeholder="Height" id="email-40e7" name="heightEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required="" />
                                    </div>
                                    <div className="u-form-group u-form-partition-factor-4 u-form-group-3">
                                        <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Ancho</label>
                                        <input ref={anchoRef} type="text" id="text-c25c" name="widthEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" placeholder="Width" required="required" />
                                    </div>
                                    <div className="u-form-group u-form-partition-factor-4 u-form-group-4">
                                        <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Largo</label>
                                        <input ref={largoRef} type="text" placeholder="Length" id="text-3800" name="lengthEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                                    </div>
                                    <div className="u-form-group u-form-partition-factor-4 u-form-group-5">
                                        <label for="text-bc62" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-5">Peso</label>
                                        <input ref={pesoRef} type="text" placeholder="Weight" id="text-bc62" name="weigthEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5" required="required" />
                                    </div>
                                    <div className="u-form-group u-form-group-6">
                                        <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-6">Puerto Origen</label>
                                        <select ref={origenRef} type="text" id="text-c1c1" name="originDockEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-6" required="required">
                                            <option value="">-- Seleccione puerto de origen --</option>
                                                {
                                                    listado.map(l => <option key={l.puerto_id} value={l.nombre_puerto}>{l.nombre_puerto}</option>)
                                                }
                                        </select>
                                    </div>
                                    <div className="u-form-group u-form-group-7">
                                        <label for="text-cd75" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-7">Puerto Destino</label>
                                        <select ref={destinoRef} type="text" id="text-cd75" name="destinationDockEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-7" required="required">
                                            <option value="">-- Seleccione puerto de destino --</option>
                                                {
                                                    listado.map(l => <option key={l.puerto_id} value={l.nombre_puerto}>{l.nombre_puerto}</option>)
                                                }
                                        </select>
                                    </div>
                                    <div className="u-form-group u-form-textarea u-form-group-8">
                                        <label for="textarea-236a" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-8">Descripción</label>
                                        <textarea ref={descripcionRef} rows="3" cols="50" id="textarea-236a" name="descriptionEdit" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-8" required="" placeholder="Ingrese una breve descripción del producto"></textarea>
                                    </div>
                                    <div className="u-align-left u-form-group u-form-submit">
                                        <a onClick={ editarOrden } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-2-editarOrden">Editar Orden</a>
                                        <input onClick={ editarOrden } type="submit" value="submit" className="u-form-control-hidden" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </>
                    : <Invalido/>
            }
            <Malecon />
            <Footer />
        </>
    )
}
