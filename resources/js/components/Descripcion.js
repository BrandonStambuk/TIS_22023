import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import derImage from '../components/images/der.png';
import izqImage from '../components/images/izq.png';
import cenImage from '../components/images/cen.png';
import jusImage from '../components/images/jus.png';

function Descripcion() {
    // Estados para la descripción, tamaño de fuente y alineación del texto
    const [description, setDescription] = useState('');
    const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial
    const [textAlign, setTextAlign] = useState('left'); // Alineación inicial

    // Funciones para manejar los cambios en el tamaño de fuente y la alineación
    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    const handleTextAlignChange = (alignment) => {
        setTextAlign(alignment);
    };


    const buttonImageStyle = {
        maxWidth: '24px',
        maxHeight: '24px',
    };

    return (
        <div>
            <h3>Descripción</h3>
            <div className="mb-3">
                <div className="btn-group me-2">
                    <button
                        onClick={() => handleFontSizeChange(fontSize + 2)}
                        className="btn btn-light btn-lg"
                    >
                        <strong>A</strong>
                    </button>
                    <button
                        onClick={() => handleFontSizeChange(fontSize - 2)}
                        className="btn btn-light btn-sm"
                    >
                        <small>A</small>
                    </button>
                </div>
                <div className="btn-group">
                    <button
                        onClick={() => handleTextAlignChange('left')}
                        className={`btn btn-light ${textAlign === 'left' ? 'active' : ''
                            }`}
                    >
                        <img src={izqImage} alt="Izquierda" style={buttonImageStyle} />
                    </button>
                    <button
                        onClick={() => handleTextAlignChange('center')}
                        className={`btn btn-light ${textAlign === 'center' ? 'active' : ''
                            }`}
                    >
                        <img src={cenImage} alt="Centro" style={buttonImageStyle} />
                    </button>
                    <button
                        onClick={() => handleTextAlignChange('right')}
                        className={`btn btn-light ${textAlign === 'right' ? 'active' : ''
                            }`}
                    >
                        <img src={derImage} alt="Derecha" style={buttonImageStyle} />
                    </button>
                    <button
                        onClick={() => handleTextAlignChange('justify')}
                        className={`btn btn-light ${textAlign === 'justify' ? 'active' : ''
                            }`}
                    >
                        <img src={jusImage} alt="Justificado" style={buttonImageStyle} />
                    </button>
                </div>
            </div>
            <div>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                        fontSize: `${fontSize}px`,
                        textAlign: textAlign,
                        width: '100%',//respinsive
                        height: '200px',
                        resize: 'none',
                    }}
                    className="form-control"
                ></textarea>
            </div>
        </div>
    );
}

export default Descripcion;

if (document.getElementById('descripcion')) {
    ReactDOM.render(<Descripcion />, document.getElementById('descripcion'));
}
