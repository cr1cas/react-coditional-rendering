import React from 'react';
import TipoMateria from '../tipo-materia/tipo-materia.comp';
import FilaMateria from '../fila-materia/fila-materia.comp';

import './tabla-materia.style.css';

const TablaMateria = () => {
    return (
        <div className="tabla-materia-container">
            <TipoMateria className="a" categoryName="Programacion IV"/>
            <FilaMateria materia={{
                name:"nombre1",
                nota: 4,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre2",
                nota: 1,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre3",
                nota: 3,
                genero: "Femenino",
            }}/>
            <FilaMateria materia={{
                name:"nombre4",
                nota: 4,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre5",
                nota: 1,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre6",
                nota: 3,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre7",
                nota: 2.9,
                genero: "Femenino",
            }}/>




            <TipoMateria categoryName="Bases de datos"/>
            <FilaMateria materia={{
                name:"nombre8",
                nota: 4,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre9",
                nota: 1,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre10",
                nota: 3,
                genero: "Femenino",
            }}/>
            <FilaMateria materia={{
                name:"nombre11",
                nota: 4,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre12",
                nota: 1,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre13",
                nota: 3,
                genero: "Femenino",
            }}/>

            <FilaMateria materia={{
                name:"nombre14",
                nota: 2.9,
                genero: "Femenino",
            }}/>



            <TipoMateria categoryName="Telecomunicaciones"/>
            <FilaMateria materia={{
                name:"nombre15",
                nota: 4,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre16",
                nota: 1,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre17",
                nota: 3,
                genero: "Masculino",
            }}/>
            <FilaMateria materia={{
                name:"nombre18",
                nota: 4,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre19",
                nota: 1,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre20",
                nota: 3,
                genero: "Masculino",
            }}/>

            <FilaMateria materia={{
                name:"nombre21",
                nota: 2.9,
                genero: "Masculino",
            }}/>

        </div>
    );
}

export default TablaMateria;