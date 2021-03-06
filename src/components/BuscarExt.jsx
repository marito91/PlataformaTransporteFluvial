import React, { useRef } from 'react'
import shipBuscar from '../static/img/undraw_container_ship_ok-1-c.svg'
import '../static/css/buscar.css'
import '../static/css/nicepage.css'
import Malecon from './Malecon'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'



export default function BuscarExt() {



    const hostBase = "http://localhost:5000"

    const numeroRef = useRef();
    const estadoRef = useRef();

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
                    estadoRef.current.value = `La orden ${res.orden.nombre_contenedor} con destino ${res.orden.puerto_destino} se encuentra ahora mismo ${res.orden.estado_orden}`;
                } else {
                    alert(res.msg);
                }
            })
        }
    };

    return (
        <>
            <Header />
            <section className="u-clearfix u-custom-color-2 u-section-1 u-section-1-buscar" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Buscar órdenes</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                        <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1 u-icon-1-buscar">
                            <img src={shipBuscar} alt="" />
                        </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-buscar"> 
                    </div>
                    <div className="formRgs u-expanded-width u-form u-form-1-buscar">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formSrch" style={{ padding: '10px' }}>
                            <div className="u-form-group u-form-textarea u-form-group-1">
                                <label for="textarea-deae" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Rastrear</label>
                                <textarea ref={numeroRef} rows="2" cols="50" id="textarea-deae" name="itemSrch" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" placeHolder="Ingrese número de pedido" required=""></textarea>
                            
                                <label for="textarea-deae" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Estado</label>
                                <textarea ref={estadoRef} rows="2" cols="50" id="textarea-deae" name="itemSrch" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required=""></textarea>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a onClick={ buscar } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Buscar</a>
                                <input onClick={ buscar } type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
