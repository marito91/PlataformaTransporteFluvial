import React from 'react'
import styles from '../static/css/nicepage.css'
import heavyBox from '../static/img/undraw_heavy_box_agqi.svg'
import deliveries from '../static/img/undraw_deliveries_-131-a.svg'
import containerShip from '../static/img/undraw_container_ship_ok-1-c.svg'

export default function Servicios() {
    return (
        <div>
            <section className="u-clearfix u-custom-color-2 u-section-1" id="sec-1d76">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Servicios</h2>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-2"> Somos una empresa dedicada al transporte fluvial de mercancía en todo el territorio colombiano.<br/>
                    <br/>Con más de 20 años de experiencia y 20 puertos a nuestra disposición, contamos con un servicio de logística implacable.</p><br/>
                    <br/>También ofrecemos logística en línea para todos nuestros clientes y usuarios externos. 
                    <span className="u-file-icon u-icon u-icon-rounded u-opacity u-opacity-40 u-palette-1-base u-spacing-10 u-icon-1">
                        <img src={heavyBox} alt="" />
                    </span>
                    <p className="u-align-center u-custom-font u-font-raleway u-text u-text-3"> Cuentas con toda la seguridad para transportar tus cargas y productos a través del sistema fluvial colombiano.</p><br/>
                    <br/>¡Afíliate a nuestros servicios!
                    
                </div>
            </section>
            <section className="u-clearfix u-custom-color-2 u-section-2" id="sec-b5e6">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-sheet-1">
                    <span className="u-file-icon u-icon u-icon-circle u-opacity u-opacity-40 u-text-palette-1-base u-icon-1">
                        <img src={deliveries} alt=""/>
                    </span>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-2">
                        <img src={containerShip} alt=""/>
                    </span>
                </div>
            </section>
        </div>
    )
}
