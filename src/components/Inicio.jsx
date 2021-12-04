import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <>
            <Header />
            <Menu />
            <Malecon />
            <Footer />
        </>
    )
}
