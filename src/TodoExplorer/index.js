import React from "react";
import "./TodoExplorer.css"
import { TodoContext } from "../TodoContext";

function TodoExplorer(){
    const {
        explorerValue,
        setExplorerValue
          } = React.useContext(TodoContext)
     return(
        <div className="explorerInput">
        <input 
        placeholder="Busqueda"
        value={explorerValue}
        onChange={ (event) => {
            setExplorerValue(event.target.value)
        }}
        /></div>
    )
  }

  export {TodoExplorer}
  