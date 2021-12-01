import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import logo from '../static/img/logo.jpeg'
import notepad from '../static/img/bx-notepad.svg'
import pack from '../static/img/bx-package.svg'
import docker from '../static/img/bxl-docker.svg'
import settings from '../static/img/bxs-brightness.svg'
import search from '../static/img/bx-search.svg'

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
                                            <a href="Inicio.html" data-page-id="2081412124" className="u-image u-logo u-image-1" data-image-width="1280" data-image-height="250" title="Inicio">
                                                <img src={logo} className="u-logo-image u-logo-image-1" />
                                            </a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a style={{ padding : '10px 6px' }}></a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Servicios.html" style={{ padding : '10px 6px' }}>Servicios</a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="calcularDistancia.html" style={{ padding : '10px 6px' }}>Cotizaciones</a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Contacto.html" style={{ padding : '10px 6px' }}>Contacto</a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a style={{ padding : '10px 6px' }}></a>
                                        </li>
                                    </ul>             
                                </div>
                                <div style={{ marginRight : "0 px", marginLeft : "auto" }}>
                                    <a href="buscar.html">
                                        <img src={search} className="u-hover-feature u-icon u-icon-circle u-text-custom-color-2 u-icon-2" alt="" />
                                    </a>
                                </div>

                                { /*<span className="u-hover-feature u-icon u-icon-circle u-text-custom-color-2 u-icon-2" data-href="buscar.html" data-page-id="416400489">
                                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24"> {/*style=""}
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1d47"></use>
                                    </svg>
                                    <svg className="u-svg-content" viewBox="0 0 24 24" id="svg-1d47">
                                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                    </svg>
                                </span>
                                <div style={{ marginRight : "0 px", marginLeft : "auto", width : "86 px" }}>
                                    <span className="u-icon u-icon-circle u-text-custom-color-2 userBox u-icon-1">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24"> {/*style=""
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-0568"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 24 24" id="svg-0568">
                                            <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                                        </svg>
                                    </span> 
                                </div>                 
                             { /*<nav className="header-info u-menu u-menu-dropdown u-offcanvas u-menu-1" data-position="Informacion" data-responsive-from="MD">
                                <div className="menu-collapse u-custom-font u-font-raleway" style={{ fontSize :  '1.5rem', letterSpacing : '0px' }}>
                                    <a className="u-button-style u-custom-active-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-custom-color-2 u-text-hover-palette-2-base" href="#">
                                        <svg>
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use>
                                        </svg>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width: '16px', height: '16px'}}>
                                                    <rect y="1" width="16" height="2"></rect>
                                                    <rect y="7" width="16" height="2"></rect>
                                                    <rect y="13" width="16" height="2"></rect>
                                                </symbol>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <div className="u-custom-menu u-nav-container">
                                    <ul className="u-custom-font u-font-raleway u-nav u-unstyled u-nav-1">
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Servicios.html" style={{ padding : '10px 6px' }}>Servicios</a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="calcularDistancia.html" style={{ padding : '10px 6px' }}>Cotizaciones</a>
                                        </li>
                                        <li className="u-nav-item">
                                            <a className="u-button-style u-nav-link u-text-active-custom-color-2 u-text-custom-color-2 u-text-hover-custom-color-3" href="Contacto.html" style={{ padding : '10px 6px' }}>Contacto</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="u-custom-menu u-nav-container-collapse">
                                    <div className="u-container-style u-custom-color-3 u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                        <div className="u-inner-container-layout u-sidenav-overflow">
                                            <div className="u-menu-close">

                                            </div>
                                        <ul className="u-align-center u-custom-font u-font-raleway u-nav u-popupmenu-items u-text-custom-color-2 u-text-hover-white u-unstyled u-nav-2">
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" href="Servicios.html" style={{ padding : '10px 6px' }}>Servicios</a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" href="calcularDistancia.html" style={{ padding : '10px 6px' }}>Cotizaciones</a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" href="Contacto.html" style={{ padding : '10px 6px' }}>Contacto</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                        <div className="u-custom-color-2 u-menu-overlay u-opacity u-opacity-70">

                                        </div>
                                </div>
                            </nav> */}
                        </div>      
                    </div>

{/* A partir de este pedazo comienza la barra de navegacion con los iconos dorados */}

                    <div className="u-border-5 u-border-custom-color-3 u-custom-color-2 u-section-row u-section-row-2" id="sec-07c1">
                        <div className="u-clearfix u-sheet u-sheet-2">
                            <div className="iconsMenu u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-sm u-hidden-xs u-list u-list-1">
                                <div className="u-repeater u-repeater-1">
                                    <div className="u-container-style u-list-item u-repeater-item">
                                        <div className="u-container-layout u-similar-container u-container-layout-1">
                                            <span className="u-custom-color-3 u-custom-item u-file-icon u-icon u-icon-circle u-spacing-10 u-icon-3">
                                                <img src={notepad} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-list-item u-repeater-item">
                                        <div className="u-container-layout u-similar-container u-container-layout-2">
                                            <span className="u-custom-color-3 u-custom-item u-file-icon u-icon u-icon-circle u-spacing-10 u-icon-4">
                                                <img src={pack} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-list-item u-repeater-item">
                                        <div className="u-container-layout u-similar-container u-container-layout-3">
                                            <span className="u-custom-color-3 u-custom-item u-file-icon u-icon u-icon-circle u-spacing-10 u-icon-5">
                                                <img src={docker} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-list-item u-repeater-item">
                                        <div className="u-container-layout u-similar-container u-container-layout-4">
                                            <span className="u-custom-color-3 u-custom-item u-file-icon u-icon u-icon-circle u-spacing-10 u-icon-6">
                                                <img src={settings} alt="" />
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>

{/* A partir de este pedazo comienza la barra de navegacion con los enlaces */}

                            <nav className="menuPrincipal u-offcanvas u-menu-2" data-position="infoMenu">
                                <div className="menu-collapse u-custom-font u-font-raleway" style={{ fontSize : '2.25rem' }}>
                                    <a className="u-button-style u-custom-color-3 u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-nav-link u-text-custom-color-3" href="#" style= {{ backgroundImage : 'none' }}>
                                        <svg>
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use>
                                        </svg>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width : '16px', height : '16px' }}>
                                                    <rect y="1" width="16" height="2"></rect>
                                                    <rect y="7" width="16" height="2"></rect>
                                                    <rect y="13" width="16" height="2"></rect>
                                                </symbol>
                                            </defs>
                                        </svg>
                                    <span> hamburgerMenu</span>
                                    </a>
                                </div>

                            <div className="u-custom-menu u-nav-container">
                                <ul className="u-custom-font u-font-raleway u-nav u-unstyled u-nav-3">
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" style={{ padding : '10px 60px' }}>Registro</a>
                                            <div className="u-nav-popup">
                                                <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                                                    <li className="u-nav-item">
                                                        <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="Registro.html">Registrar usuario</a>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="crearOrden.html">Registrar orden</a>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="registrarPuerto.html">Registrar puerto</a>
                                                    </li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="Órdenes.html" style={{ padding : '10px 60px' }}>Órdenes</a>
                                            <div className="u-nav-popup">
                                                <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-5">
                                                    <li className="u-nav-item">
                                                        <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="crearOrden.html">Crear</a>
                                                    </li>
                                                    <li className="u-nav-item">
                                                        <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="buscar.html">Buscar</a>
                                                        <div className="u-nav-popup">
                                                            <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-6">
                                                                <li className="u-nav-item">
                                                                    <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="historial.html">Historial</a>
                                                                </li>
                                                                <li className="u-nav-item">
                                                                    <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="Estado.html">Estado de orden</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="Puertos.html" style={{ padding : '10px 60px' }}>Puertos</a>
                                        <div className="u-nav-popup">
                                            <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-7">
                                                <li className="u-nav-item">
                                                    <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="listarPuertos.html">Listar puertos</a>
                                                </li>
                                                <li className="u-nav-item">
                                                    <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="calcularDistancia.html">Calcular distancia</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" style={{ padding : '10px 60px' }}>Ajustes</a>
                                        <div className="u-nav-popup">
                                            <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-8">
                                                <li className="u-nav-item">
                                                    <a className="u-active-custom-color-2 u-button-style u-custom-color-2 u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" href="costoDeMilla.html">Costo de milla</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="u-custom-menu u-nav-container-collapse">
                                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                    <div className="u-inner-container-layout u-sidenav-overflow">
                                        <div className="u-menu-close">

                                        </div>
                                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-9">
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" style={{ padding : '10px 60px' }}>Registro</a>
                                                <div className="u-nav-popup">
                                                    <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-10">
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="Registro.html">Registrar usuario</a>
                                                        </li>
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="crearOrden.html">Registrar orden</a>
                                                        </li>
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="registrarPuerto.html">Registrar puerto</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" href="Órdenes.html" style={{ padding : '10px 60px' }}>Órdenes</a>
                                                <div className="u-nav-popup">
                                                    <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-11">
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="crearOrden.html">Crear</a>
                                                        </li>
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="buscar.html">Buscar</a>
                                                            <div className="u-nav-popup">
                                                                <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-12">
                                                                    <li className="u-nav-item">
                                                                        <a className="u-button-style u-nav-link" href="historial.html">Historial</a>
                                                                    </li>
                                                                    <li className="u-nav-item">
                                                                        <a className="u-button-style u-nav-link" href="Estado.html">Estado de orden</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" href="Puertos.html" style={{ padding : '10px 60px' }}>Puertos</a>
                                                <div className="u-nav-popup">
                                                    <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-13">
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="listarPuertos.html">Listar puertos</a>
                                                        </li>
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="calcularDistancia.html">Calcular distancia</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="u-nav-item">
                                                <a className="u-button-style u-nav-link" style={{ padding : '10px 60px' }}>Ajustes</a>
                                                <div className="u-nav-popup">
                                                    <ul className="u-border-2 u-border-custom-color-3 u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-14">
                                                        <li className="u-nav-item">
                                                            <a className="u-button-style u-nav-link" href="costoDeMilla.html">Costo de milla</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    <div className="u-black u-menu-overlay u-opacity u-opacity-70">

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}