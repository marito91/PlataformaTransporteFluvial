import React, { useEffect, useState, useRef } from 'react'
import '../static/css/nicepage.css'
import '../static/css/costoDeMilla.css'
import millaShip from '../static/img/undraw_container_ship_ok-1-c.svg'
import Malecon from './Malecon'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function CostoDeMilla() {
    
    const dolaresRef = useRef();
    const pesosRef = useRef();

    
    const hostBase = "http://localhost:5000"

    const [dolares, setDolares] = useState();
    const [pesos, setPesos] = useState();

    
    
    useEffect(()=>{
        fetch(`${hostBase}/puertos/verCostoMilla`,{
            method:"POST"
        }).then(res => res.json()) // Se guardan los datos en la variables, en este caso, convertidos a json
        .then(res => { // Se capturan los datos 
            if (res.estado === "ok"){
                setDolares(res.data);
                setPesos(res.pesos);
            }              
        })
    }, []);
    
    
    return (
        <>
            <Header />
            <Menu />
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Ajuste Costo de Milla</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1">
                    </div>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <img src={millaShip} alt="" />
                    </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-costoDeMilla"> 
                    </div>
                    <div className="formRgs u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1-costoDeMilla">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formCost" style={{ padding : '10px' }}>
                            <div className="u-form-group u-form-name">
                                <label for="name-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Valor Milla COP</label>
                                <input ref={pesosRef} type="text" id="name-40e7" name="copCost" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="" />
                            </div>
                            <div className="u-form-email u-form-group">
                                <label for="email-40e7" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-2">Valor Milla USD</label>
                                <input ref={dolaresRef} type="email" id="email-40e7" name="usdCost" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required="" />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1">Establecer</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                    <a href="" className="aviso u-border-2 u-border-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-3 u-custom-font u-font-raleway u-hidden-xs u-radius-10 u-text-custom-color-2 u-btn-2-costoDeMilla">El valor actual por milla náutica es de COP $ {pesosRef} o USD &amp; {dolaresRef}</a>
                </div>
            </section>
            <Malecon />
            <Footer />

        </>
    )
}
