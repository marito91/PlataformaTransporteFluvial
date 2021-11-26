import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import logo from '../static/img/logo.jpeg'

export default function NavigationBar() {
    
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Image src={logo} height="90 px" width="459 px" className="u-image u-logo u-image-1" data-image-width="1280" data-image-height="250" href="#home" fluid />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Servicios</Nav.Link>
                        <Nav.Link href="#link">Cotizaciones</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}