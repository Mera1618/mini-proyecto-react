import React from "react";
import '../css/boton.css';

function boton(props) {
    return(
        <div
            className={`boton-contenedor ${esMas (props.children)} ? 'esMas' : ''}`.trimEnd}
            onClick= {()=> props.manejarclic(props.children)}>
                {props.children}
        </div>
    )
}

export default boton;