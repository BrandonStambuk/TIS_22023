import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                 {/* <a class="navbar-brand" href="#">ICPC</a>*/}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Que es la ICPC?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Eventos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Competencias</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ml-auto"> {/* Agrega este div */}
                        <a class="nav-link" href="#">Iniciar Sesion</a> {/* Agrega aquí tu enlace "Login" */}
                    </div>
                </div>
            </nav>
        );
    }
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}