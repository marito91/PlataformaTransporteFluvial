import React from 'react'
import '../static/css/crearOrden.css'
import '../static/css/nicepage.css'
import shipCreateOrder from '../static/img/undraw_container_ship_ok-1-c.svg'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Malecon from './Malecon'
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';


export default function CrearOrden() {

    const hostBase = "http://localhost:5000"

    // Hooks para agarrar la variables con el atributo de ref dentro de la funcion
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

    // Se traen los puertos para ubicarlos en los select fields
    function listar() {
        let listado;
        fetch(`${hostBase}/ordenes/listarPuerto`) // Promesa - Se piden los datos
            .then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
            .then(res => { // Se capturan los datos               
                console.log(res)
                /*for (i in res.puertos) {
                    x = res.puertos[i];
                    listado.push(x)
                }*/
                listado = res
                console.log(listado)
            })
    }
        
    function crearOrden() {
        const articulo = articuloRef.current.value;
        const alto = altoRef.current.value;
        const ancho = anchoRef.current.value;
        const largo = largoRef.current.value;
        const peso = pesoRef.current.value;
        const origen = origenRef.current.value;
        const destino = destinoRef.current.value;
        const descripcion = descripcionRef.current.value;
        fetch(`${hostBase}/ordenes/registrarOrden`, {
            headers:{ "content-type" : "application/json" },
            method:"POST",
            body: JSON.stringify({ articulo, alto, ancho, largo, peso, origen, destino, descripcion} )
        }).then(data => data.json())
            .then(data => {
            alert(data.msg);
            console.log(data.msg);
        })
        limpiar();

    }
/*
    function consultar() {
        // Se toma el valor del documento ya que es el unico
        const document = docRef.current.value;
        fetch(`${hostBase}/user/listarUsuario/${document}`) // Promesa - Se piden los datos
            .then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
            .then(res => { // Se capturan los datos
                if (res.estado === "ok") {
                    articuloRef.current.value = res.data.nombre;
                    altoRef.current.value = res.data.apellido;
                    anchoRef.current.value = res.data.tipo_documento;
                    largoRef.current.value = res.data.numero_documento;
                    pesoRef.current.value = res.data.email;
                    origenRef.current.value = res.data.perfil;
                    destinoRef.current.value = res.data.celular;
                    descripcionRef.current.value = res.data.pass;
                    alert(res.msg)
                }else{
                    alert(res.msg)
                }
            })
    }
*/

    // Funcion para borrar los text fields apenas se registren los datos
    function limpiar() {
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
                                    <input ref={altoRef} type="email" placeholder="Height" id="email-40e7" name="heightOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2-crearOrden" required="" />
                                </td>
                                <td>
                                    <input ref={anchoRef} type="text" id="text-c25c" name="widthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3-crearOrden" placeholder="Width" required="required" />
                                </td>
                                <td>
                                    <input ref={largoRef} type="text" placeholder="Length" id="text-3800" name="lengthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4-crearOrden" required="required" />
                                </td>
                                <td>
                                    <input ref={pesoRef} type="text" placeholder="Weigth" id="text-bc62" name="weigthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5-crearOrden" required="required" />
                                </td>
                            </tr>
                        </table>
                        
                        
                        {/* Esta parte se pasó a una tabla para hacerlo más cómodo
                        <div className="u-form-group u-form-name">
                            <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Nombre del artículo</label>
                            <input type="text" id="name-40e7" name="nameOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1-crearOrden" required="" />
                        </div>
                        <div className="u-form-email u-form-group-crearOrden u-form-partition-factor-4">
                            <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Alto</label>
                            <input type="email" placeholder="Height" id="email-40e7" name="heightOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2-crearOrden" required="" />
                        </div>
                        <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-3-crearOrden" style={{ padding : '-50px' }}>
                            <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Ancho</label>
                            <input type="text" id="text-c25c" name="widthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3-crearOrden" placeholder="Width" required="required" />
                        </div>
                        <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-4-crearOrden">
                            <label for="text-3800" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Largo</label>
                            <input type="text" placeholder="Length" id="text-3800" name="lengthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4-crearOrden" required="required" />
                        </div>
                        <div className="u-form-group-crearOrden u-form-partition-factor-4 u-form-group-5-crearOrden">
                            <label for="text-bc62" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-5">Peso</label>
                            <input type="text" placeholder="Weigth" id="text-bc62" name="weigthOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-5-crearOrden" required="required" />
                        </div> 

                        */}

                        
                        <div className="u-form-group u-form-group-6-crearOrden">
                            <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-6">Puerto Origen</label>
                            <select ref={origenRef} type="text" id="text-c1c1" name="originDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-6-crearOrden" required="required">
                                <option value="">-- Seleccione puerto de origen --</option>
                                {
                                    listado.map(l => <option key={l.nombre} value={l}>{l.nombre}</option>)
                                }
                            </select>
                        
                        
                        </div>
                        <div className="u-form-group u-form-group-7-crearOrden">
                            <label for="text-cd75" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-7">Puerto Destino</label>
                            <select ref={destinoRef} type="text" id="text-cd75" name="destinationDockOrd" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-7-crearOrden" required="required">
                                <option value="">-- Seleccione puerto de destino --</option>
                                    {
                                        listado.map(l => <option key={l.nombre} value={l}>{l.nombre}</option>)
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
            <Malecon />
            <Footer />
        </>
    )
}
