import React from "react";
import "./TodoController.css";
import { TodoContext } from "../TodoContext";

function TodoController(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
    return(
      <h1>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h1>
      )
  }

  
export{TodoController}