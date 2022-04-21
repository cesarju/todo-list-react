import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import "./App.css";

const todos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de React Js", complete: false },
  { text: "Llorar con la cebolla", complete: false },
  { text: "Aprender con react", complete: false },
  { text: "La funcion map", complete: false },
  { text: "La funcion map1", complete: false },
  { text: "La funcion map3", complete: false },
  { text: "La funcion map4", complete: false },
  { text: "La funcion map5", complete: false },
  { text: "La funcion map6", complete: false },
  { text: "La funcion map7", complete: false },
  { text: "La funcion map8", complete: false },
  { text: "La funcion map9", complete: false },
  { text: "La funcion map10", complete: false },
  { text: "La funcion map11", complete: false },
];

function App() {
  return (
    //envolver con este componente hace que no afecte la UI que es lo que pasa con div
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((element) => (
          <TodoItem key={element.text} text={element.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
