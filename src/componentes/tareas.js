import React from 'react';
import '../css/tareas.css';
import { FcCancel } from "react-icons/fc";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div id='contenedor-res'>
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div 
            className='tarea-texto'
            onClick={() => completarTarea(id)}>
            {texto}
        </div>
        <div 
            className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}>
            <FcCancel className='tarea-icono' />
        </div>
        </div>
    </div>
  );    
}

export default Tarea;