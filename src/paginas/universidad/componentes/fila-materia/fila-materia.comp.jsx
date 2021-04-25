import React from 'react';

import './fila-materia.style.css';

const FilaMateria = (props) => {
    return (
        <div className="fila-materia-container">
            
            {
                props.materia.nota <= 2.9
                
                ?/**if true*/
                    <span className="materia-perdida">{props.materia.name}</span>

                : /**else*/
                    <span>{props.materia.name}</span>

            } 
             - {props.materia.nota} - 
            {props.materia.genero}

        </div>
    );
}

export default FilaMateria;