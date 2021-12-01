import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/listarPuertos.css'
import Barco from './Barco'

export default function ListarPuertos() {
    return (
        <div>
            <section class="u-clearfix u-custom-color-2 u-section-1" id="sec-7127">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <span class="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <img src="static/img/undraw_container_ship_ok-1-c.svg" alt="" />
                    </span>
                    <h2 class="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Listado de puertos</h2>
                    <div class="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1"></div>
                    <div class="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2"></div>
                    <div class="u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-white u-shape-3"></div>
                    <h3 class="u-align-center u-custom-font u-font-raleway u-text u-text-default u-text-2">Actualmente contamos con los siguientes puertos:</h3>
                </div>
            </section>
        </div>
    )
}