import React from 'react'
import colombia from '../static/img/co-03.jpg'
import inst from '../static/img/bxl-instagram.svg'
import twit from '../static/img/bxl-twitter.svg'
import face from '../static/img/bxl-facebook.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="u-align-center u-border-4 u-border-custom-color-2 u-clearfix u-footer u-white u-footer" id="sec-8a5e">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <img className="u-image u-image-default u-image-1" src={colombia} alt="" data-image-width="3000" data-image-height="2250" />
                        <p className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-align-right-xs u-custom-font u-font-raleway u-hidden-xs u-small-text u-text u-text-custom-color-2 u-text-variant u-text-1"> www.navieradelguavio.com<br/>Cra. 90 # 80 - 70<br/>Pbx: (8) 3349876<br/>Copyright © 2021</p>
                    <div className="u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-1">
                                    <span className="u-custom-item u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                                        <img src={inst} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-2">
                                    <span className="u-custom-item u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                                        <img src={twit} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-3">
                                    <span className="u-custom-item u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                                        <img src={face} alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
