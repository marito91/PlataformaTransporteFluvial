import React, { useState, useRef, useEffect } from 'react'
import '../static/css/nicepage.css'
import '../static/css/calcularDistancia.css'
import ship from '../static/img/undraw_container_ship_ok-1-c.svg'
import Malecon from './Malecon'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'

export default function CalcularDistancia() {


    const hostBase = "http://localhost:5000"

    // useStates 
    const [dolares, setDolares] = useState([]);
    const [pesos, setPesos] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');


    const origenRef = useRef();
    const destinoRef = useRef();
    const distanciaRef = useRef();
    const valorRef = useRef();

    // Funcion para recargar pagina
    function refreshPage() {
        window.location.reload(false);
      }

    
    // Trae la informacion del costo de milla del back
    useEffect(()=>{
        fetch(`${hostBase}/puertos/verCostoMilla`,{
            method:"POST"
        }).then(res => res.json()) 
        .then(res => { 
            if (res.estado === "ok"){
                setDolares(res.data);
                setPesos(res.pesos);
            }              
        })
    }, []);

    


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

    // Funcion para convertir un numero entero en String con comas (,)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function calcular() {
        const origen = origenRef.current.value;
        const destino = destinoRef.current.value;
        if (origen === destino) {
            alert("Los puertos ingresados deben ser diferentes.")
        } else {
            fetch(`${hostBase}/puertos/listarDistanciaPuerto`, { 
                headers:{ "content-type" : "application/json" },
                method:"POST",
                body: JSON.stringify({ origen, destino })
            }).then(res => res.json())
                .then(res => {
                    if (res.estado === "ok") {
                        //alert(res.msg);
                        distanciaRef.current.value = res.distancia + " millas náuticas";
                        valorRef.current.value = numberWithCommas(res.precio) + " pesos";
                    }
            })
        }
    };


    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Calcular Distancia</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <img src={ship} alt="" />
                    </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-CalcularDistancia">

                    </div>
                    <div className="formRgs u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1 u-form-1-CalcularDistancia">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formDist" style={{padding : '10px' }}>
                            <div className="u-form-group u-form-name u-form-partition-factor-2">
                                <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Puerto Origen</label>
                                <select ref={origenRef} type="text" id="name-40e7" name="originDockDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" placeholder="Ingrese puerto de origen">
                                    <option value="">-- Seleccione puerto de origen --</option>
                                            {
                                                listado.map(l => <option key={l.id_puerto} value={l.nombre}>{l.nombre}</option>)
                                            }
                                </select>
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-2">
                                <label for="text-c1c1" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Puerto Destino</label>
                                <select ref={destinoRef} type="text" id="text-c1c1" name="destinationDockDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required="required" placeholder="Ingrese puerto de destino">
                                    <option value="">-- Seleccione puerto de destino --</option>
                                        {
                                            listado.map(l => <option key={l.id_puerto} value={l.nombre}>{l.nombre}</option>)
                                        }
                                </select>
                            </div>
                            <div className="u-form-email u-form-group u-form-partition-factor-2">
                                <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-3">Distancia</label>
                                <input ref={distanciaRef} type="email" id="email-40e7" name="distanceDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-3" required="" />
                            </div>
                            <div className="u-form-group u-form-partition-factor-2 u-form-group-4">
                                <label for="text-c25c" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-4">Valor a pagar</label>
                                <input ref={valorRef} type="text" id="text-c25c" name="priceDist" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-4" required="required" />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a onClick={ calcular } href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Calcular</a>
                                <input onClick={ calcular } type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                        <a href="" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-2-calcularDistancia">El valor actual por milla náutica es de COP $ {pesos} o USD $ {dolares}</a>
                    </div>
                </div>
            </section>
            <Malecon />
            <Footer />
        </>
    )
}
