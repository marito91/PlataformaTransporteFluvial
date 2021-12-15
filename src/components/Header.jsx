import React from 'react'
import logo from '../static/img/logo.jpeg'
import userLogo from '../static/img/bxs-user-circle.svg'
import search from '../static/img/bx-search.svg'
import '../static/css/header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    
    return (
        <>
            <header className=" u-clearfix u-header u-section-row-container" id="sec-a1d1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                <div className="u-section-rows">
                    <div className="u-clearfix u-section-row u-section-row-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="" id="sec-03fe">
                        <div className="u-clearfix u-sheet u-valign-top-xs u-sheet-1 ">
                            <div className="u-custom-menu u-nav-container">
                                <ul className="u-custom-font u-font-raleway u-nav u-unstyled u-nav-1">
                                    <li className="u-nav-item">
                                        <Link to="/" data-page-id="2081412124" className="u-image u-logo u-image-1" data-image-width="1280" data-image-height="250" title="Inicio">
                                            <img src={logo} className="u-logo-image u-logo-image-1" />
                                        </Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <a style={{ padding : '10px 6px' }}></a>
                                    </li>
                                    <li className="u-nav-item">  
                                        <Link to="/servicios" className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Servicios.html" style={{ padding : '10px 6px' }}>Servicios</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/calcular_envio" className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="calcularDistancia.html" style={{ padding : '10px 6px' }}>Cotizaciones</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/contacto" className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Contacto.html" style={{ padding : '10px 6px' }}>Contacto</Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <a style={{ padding : '10px 6px' }}></a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a style={{ padding : '10px 6px' }}></a>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/ordenes">
                                            <img src={search} className="u-hover-feature u-icon u-icon-circle u-text-custom-color-2 buscar" alt="" />
                                        </Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link to="/inicio">
                                            <img src={userLogo} className="u-hover-feature u-icon u-icon-circle u-text-custom-color-2 userbox" alt="" />
                                        </Link>
                                    </li>
                                </ul>             
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}