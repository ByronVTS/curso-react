import React from "react";
import "./GenerationTodoButton.css";

  //me olvide poner el {} y se cago todo PONER MUCHA ATENCION
function GenerationTodoButton({setOpenModal}) {
  return (
    <button
      className="generationTodoButton"
      // cualquier cosa que empieze por on es donde empezara a escuchar eventos, aqui vemos como es la nueva sintaxis para usar funciones
      onClick={
        () => {
        setOpenModal(state => !state);
      }
    }
    >Nueva Tarea</button>
  );
}

export { GenerationTodoButton };
