import React from 'react'
import Malecon from './Malecon'
import '../static/css/nicepage.css'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <>
            <Header />
            <Malecon />
            <Footer />
        </>
    )
}
