import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/QueIcpc.css';

export default class Wicpc extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card card-translucent">
                            <h3 className="card-header">Eventos UMSS Contest</h3>
                            <div className="card-body">
                                <div className="bg-white">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus nec libero condimentum fermentum. Nullam vehicula, velit eu consequat hendrerit, dolor tortor rhoncus nisl, non varius nisi ipsum nec ex. Nulla eu sapien nec sapien sodales iaculis. Fusce vel purus eu felis rhoncus ultricies eu non tellus. Aenean tristique odio nec tortor ultricies, a ultrices orci cursus. Proin tristique, sapien vel pellentesque mattis, odio arcu fringilla tellus, eu vehicula eros tellus vel dui. Vestibulum volutpat metus vel ex hendrerit, vel lacinia nunc facilisis. Integer interdum elit eu mi vehicula vehicula. Vivamus in augue vel orci scelerisque rhoncus. Vivamus venenatis quam non est vehicula, ut auctor orci fermentum. Suspendisse sit amet euismod odio, eu fringilla justo. Vivamus vel risus vel justo efficitur iaculis in ac lacus. Nulla facilisi.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-translucent">
                            <h3 className="card-header">Eventos Pasados</h3>
                            <div className="card-body table-responsive tabla-contenedor">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-white'>Nombre</th>
                                            <th className='text-white'>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Evento 1</td>
                                            <td>Tipo 1</td>
                                        </tr>
                                        <tr>
                                            <td>Evento 2</td>
                                            <td>Tipo 2</td>
                                        </tr>
                                        <tr>
                                            <td>Evento 1</td>
                                            <td>Tipo 1</td>
                                        </tr>
                                        <tr>
                                            <td>Evento 2</td>
                                            <td>Tipo 2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}