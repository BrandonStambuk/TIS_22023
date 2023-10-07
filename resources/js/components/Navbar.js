import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                 {/* <a className="navbar-brand" href="#">ICPC</a>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">¿Qué es la ICPC?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/eventos">Eventos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Competencias</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto"> {/* Agrega este div */}
                        <a className="nav-link" href="#">Iniciar Sesion</a> {/* Agrega aquí tu enlace "Login" */}
                    </div>
                </div>
            </nav>
        );
    }
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}