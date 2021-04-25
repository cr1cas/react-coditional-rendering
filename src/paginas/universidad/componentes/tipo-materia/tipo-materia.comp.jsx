import React from 'react';

import './tipo-materia.style.css';

const TipoMateria = (props) => {
    return (
        <div className="tipo-materia-container">
            {props.categoryName}
        </div>
    );
}

export default TipoMateria;