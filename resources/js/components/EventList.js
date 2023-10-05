import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/eventList.css';
//comentario prueba 
function EventList() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card card-translucent">
            <h3 className="card-header">Eventos Diponibles</h3>
            <div className="card-body table-responsive tabla-contenedor">
              <table>
                <thead>
                  <tr >
                    <th className='text-white'>Nombre</th>
                    <th className='text-white'>Tipo</th>
                    <th className='text-white'>Fecha de Inicio</th>
                    <th className='text-white'>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Evento 1</td>
                    <td>Taller de Entrenamiento</td>
                    <td>2023-10-06</td>
                    <td>6 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 2</td>
                    <td>Competencias de Entrenamiento</td>
                    <td>2023-10-07</td>
                    <td>8 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 3</td>
                    <td>Clasificatorios Internos</td>
                    <td>2023-10-08</td>
                    <td>5 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 4</td>
                    <td>Taller de Entrenamiento</td>
                    <td>2023-10-09</td>
                    <td>7 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 5</td>
                    <td>Competencias de Entrenamiento</td>
                    <td>2023-10-10</td>
                    <td>4 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 6</td>
                    <td>Clasificatorios Internos</td>
                    <td>2023-10-11</td>
                    <td>9 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 7</td>
                    <td>Taller de Entrenamiento</td>
                    <td>2023-10-12</td>
                    <td>6 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 8</td>
                    <td>Competencias de Entrenamiento</td>
                    <td>2023-10-13</td>
                    <td>10 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 9</td>
                    <td>Clasificatorios Internos</td>
                    <td>2023-10-14</td>
                    <td>3 horas</td>
                  </tr>
                  <tr>
                    <td>Evento 10</td>
                    <td>Taller de Entrenamiento</td>
                    <td>2023-10-15</td>
                    <td>12 horas</td>
                  </tr>
                </tbody>
              </table>
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
                  </tr><tr>
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

export default EventList;

if (document.getElementById('eventList')) {
  ReactDOM.render(<EventList />, document.getElementById('eventList'));
}