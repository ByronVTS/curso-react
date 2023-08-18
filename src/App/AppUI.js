import React from "react";
import { TodoController } from "../TodoController";
import { TodoExplorer } from "../TodoExplorer";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { GenerationTodoButton } from "../GenerationTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const { loading, error, explorerTodos, completeTodo, deleteTodo, openModal,setOpenModal} =
    React.useContext(TodoContext);
  return (
    // el usar    <React.Fragment> nos sirve para isertar un etiqueta invicible que nos permte colocar mas de un fragmento de html a la vez con otros nombres
    <React.Fragment>
      <TodoController />
      <TodoExplorer />

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError />}
        {(!loading && explorerTodos.length === 0) && <EmptyTodos />}

        {explorerTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <GenerationTodoButton 
        setOpenModal={setOpenModal}
      />
      {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };

