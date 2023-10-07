import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../resources/css/eventList.css';

function ListaEventos() {
  const [pagina, setPagina] = useState(0);

  const eventos = [
    {
      nombre: "Evento 1",
      tipo: "Taller de Entrenamiento",
      fechaInicio: "2023-10-06",
      duracion: "6 horas",
    },
    {
      nombre: "Evento 2",
      tipo: "Competencias de Entrenamiento",
      fechaInicio: "2023-10-07",
      duracion: "8 horas",
    },
    {
      nombre: "Evento 3",
      tipo: "Reclutamiento",
      fechaInicio: "2023-10-08",
      duracion: "5 horas",
    },
    {
      nombre: "Evento 4",
      tipo: "Clasificatorios Internos",
      fechaInicio: "2023-10-09",
      duracion: "4 horas",
    },
    {
      nombre: "Evento 5",
      tipo: "Taller de Entrenamiento",
      fechaInicio: "2023-10-10",
      duracion: "7 horas",
    },
    {
      nombre: "Evento 6",
      tipo: "Competencias de Entrenamiento",
      fechaInicio: "2023-10-11",
      duracion: "6 horas",
    },
    {
      nombre: "Evento 7",
      tipo: "Reclutamiento",
      fechaInicio: "2023-10-12",
      duracion: "3 horas",
    },
    {
      nombre: "Evento 8",
      tipo: "Clasificatorios Internos",
      fechaInicio: "2023-10-13",
      duracion: "5 horas",
    },
    {
      nombre: "Evento 9",
      tipo: "Taller de Entrenamiento",
      fechaInicio: "2023-10-14",
      duracion: "6 horas",
    },
    {
      nombre: "Evento 10",
      tipo: "Competencias de Entrenamiento",
      fechaInicio: "2023-10-15",
      duracion: "8 horas",
    },
    {
      nombre: "Evento 11",
      tipo: "Reclutamiento",
      fechaInicio: "2023-10-16",
      duracion: "4 horas",
    },
    {
      nombre: "Evento 12",
      tipo: "Clasificatorios Internos",
      fechaInicio: "2023-10-17",
      duracion: "7 horas",
    },
    {
      nombre: "Evento 13",
      tipo: "Taller de Entrenamiento",
      fechaInicio: "2023-10-18",
      duracion: "5 horas",
    },
    {
      nombre: "Evento 14",
      tipo: "Competencias de Entrenamiento",
      fechaInicio: "2023-10-19",
      duracion: "6 horas",
    },
    {
      nombre: "Evento 15",
      tipo: "Reclutamiento",
      fechaInicio: "2023-10-20",
      duracion: "4 horas",
    }
  ];

  const cambiarPagina=(nuevaPagina)=>{
    setPagina(nuevaPagina);
  };

  const eventosPorPagina=7;
  const inicio=pagina*eventosPorPagina;
  const fin=inicio+eventosPorPagina;
  const eventosVisibles=eventos.slice(inicio,fin);
  const totalPaginas=Math.ceil(eventos.length/eventosPorPagina);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card card-translucent">
            <h3 className="card-header">Eventos Disponibles</h3>
            <div className="card-body table-responsive tabla-contenedor">
              <table>
                <thead>
                  <tr>
                    <th className='text-white'>Nombre</th>
                    <th className='text-white'>Tipo</th>
                    <th className='text-white'>Fecha de Inicio</th>
                    <th className='text-white'>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {eventosVisibles.map((evento, index) => (
                    <tr key={index}>
                      <td>{evento.nombre}</td>
                      <td>{evento.tipo}</td>
                      <td>{evento.fechaInicio}</td>
                      <td>{evento.duracion}</td>
                    </tr>
                  ))}
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
                 </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 text-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${pagina===0 ? 'disabled':''}`}>
                <button className="page-link" onClick={()=>cambiarPagina(pagina-1)}>
                  Anterior
                </button>
              </li>
              {Array.from({length:totalPaginas}).map((_,index)=>(
                <li key={index} className={`page-item ${pagina===index ? 'active':''}`}>
                  <button className="page-link" onClick={()=>cambiarPagina(index)}>
                    {index+1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${pagina===totalPaginas-1 ? 'disabled':''}`}>
                <button className="page-link" onClick={()=>cambiarPagina(pagina+1)}>
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ListaEventos;

if (document.getElementById('eventList')) {
  ReactDOM.render(<ListaEventos />, document.getElementById('eventList'));
}
