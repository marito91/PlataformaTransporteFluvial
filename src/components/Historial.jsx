import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import '../static/css/historial.css'
import Barco from './Barco'

export default function Historial() {
    return (
        <div>
            <section className="u-clearfix u-custom-color-2 u-section-1 u-section-1-historial" id="sec-7127">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-align-center u-custom-font u-font-raleway u-text u-text-custom-color-3 u-text-default u-text-1">Historial de órdenes</h2>
                    <div className="u-custom-color-3 u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-1"></div>
                    <span className="u-file-icon u-icon u-icon-rectangle u-opacity u-opacity-40 u-icon-1">
                        <Barco />
                    </span>
                    <div className="u-custom-color-2 u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-hidden-md u-hidden-sm u-hidden-xs u-radius-10 u-shape u-shape-round u-shape-2-historial "></div>
                    <div className="formRgs u-expanded-width u-form u-form-1">
                        <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="formHist" style={{ padding: '10px' }}>
                            <div className="u-form-group u-form-select u-form-group-1">
                                <label for="select-8a69" className="u-custom-font u-font-raleway u-label u-text-custom-color-3 u-label-1">Organizar por:</label>
                                <div className="u-form-select-wrapper">
                                    <select id="select-8a69" name="filter" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-1" required="required">
                                        <option value="Item 1">Fecha</option>
                                        <option value="Item 2">Numero de orden</option>
                                        <option value="Item 3">Estado</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                                </div>
                            </div>
                            <div className="u-form-group u-form-textarea u-form-group-2">
                                <label for="textarea-deae" className="u-custom-font u-font-raleway u-form-control-hidden u-label u-text-custom-color-3 u-label-2"></label>
                                <textarea rows="4" cols="50" id="textarea-deae" name="itemSrch" className="u-border-1 u-border-grey-30 u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-text-custom-color-2 u-white u-input-2" required=""></textarea>
                            </div>
                                <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-active-custom-color-3 u-border-2 u-border-active-custom-color-3 u-border-custom-color-3 u-border-hover-custom-color-3 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-custom-font u-font-raleway u-hover-custom-color-3 u-radius-10 u-text-active-custom-color-2 u-text-custom-color-3 u-text-hover-custom-color-2 u-btn-1 u-btn-1-historial">Buscar</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Malecon />
        </div>
    )
}
