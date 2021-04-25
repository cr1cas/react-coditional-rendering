import React from 'react';

import TablaMateria from '../tabla-materia/tabla-materia.comp';


import './filtro-materia.style.css';


const FiltroMateria = () => {
    return (
        <div className="filtro-materia-container">
            
            <TablaMateria/>
            
        </div>
    );
}

export default FiltroMateria;