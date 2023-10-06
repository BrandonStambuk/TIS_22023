import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


// aqui se edita el tamaño de los inputs
const inputStyle = {
  width: '170px',
  height: '30px',
  fontSize: '14px',
};

function CreateEvent() {
  const [selectedTipo, setSelectedTipo] = useState(''); // Estado para el tipo de evento seleccionado
  const [fechaInicioInscripciones, setFechaInicioInscripciones] = useState('');
  const [fechaFinInscripciones, setFechaFinInscripciones] = useState('');
  const [horas, setHoras] = useState(''); // Estado para las horas

  const handleTipoEventoChange = (event) => {
    setSelectedTipo(event.target.value);
  };

  const handleFechaInicioChange = (event) => {
    setFechaInicioInscripciones(event.target.value);
  };

  const handleFechaFinChange = (event) => {
    setFechaFinInscripciones(event.target.value);
  };

  const handleHorasChange = (event) => {
    setHoras(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="cardd">
            <div className="card-body">
              <div className="row">
                {/* Columna izquierda para el form */}
                <div className="col-md-8">
                  <h2 className="card-title">Crear Evento</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="nombreEvento" className="form-label">Nombre del Evento</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombreEvento"
                        name="nombreEvento"
                        style={inputStyle}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tipo de Evento</label>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="Reclutamiento"
                            onChange={handleTipoEventoChange}
                            checked={selectedTipo === 'Reclutamiento'}
                          />
                          Reclutamiento
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="Taller de reclutamiento"
                            onChange={handleTipoEventoChange}
                            checked={selectedTipo === 'Taller de reclutamiento'}
                          />
                          Taller de reclutamiento
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="Competencia de entrenamiento"
                            onChange={handleTipoEventoChange}
                            checked={selectedTipo === 'Competencia de entrenamiento'}
                          />
                          Competencia de entrenamiento
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="Competencia interna"
                            onChange={handleTipoEventoChange}
                            checked={selectedTipo === 'Competencia interna'}
                          />
                          Competencia interna
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
                      <input
                        type="date"
                        className="form-control"
                        id="fechaInicio"
                        name="fechaInicio"
                        style={inputStyle}
                        value={fechaInicioInscripciones}
                        onChange={handleFechaInicioChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
                      <input
                        type="date"
                        className="form-control"
                        id="fechaFin"
                        name="fechaFin"
                        style={inputStyle}
                        value={fechaFinInscripciones}
                        onChange={handleFechaFinChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="horas" className="form-label">Horas</label>
                      <select
                        className="form-select"
                        id="horas"
                        name="horas"
                        style={inputStyle}
                        value={horas}
                        onChange={handleHorasChange}
                      >
                        <option value="">Seleccionar horas</option>
                        <option value="1">1 hora</option>
                        <option value="2">2 horas</option>
                        <option value="3">3 horas</option>
                        <option value="4">4 horas</option>
                        
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>
                  </form>
                </div>
                {/* Columna derecha para el título "Descripción" */}
                {/* <div className="col-md-4">
                  <h3>Descripción</h3>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Columna derecha vacía para editar no consigo mover la tarjeta un poco mas al centro xd
        <div className="col-md-4">
            <p>estoy aqui</p>
        </div> */}
      </div>
    </div>
  );
}

export default CreateEvent;

if (document.getElementById('createEvent')) {
  ReactDOM.render(<CreateEvent />, document.getElementById('createEvent'));
}
