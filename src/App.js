import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { useState } from "react";
import "./App.css";

const defaultTodos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de React Js", complete: true },
  { text: "Llorar con la cebolla", complete: false },
  { text: "Aprender con react", complete: true },
  { text: "La funcion map", complete: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [valueSearch, setValueSearch] = useState("");

  const completed = todos.filter((element) => !!element.complete).length; //filtrar ciertos elementos con el valor de true !!
  //console.log(todos.filter((element) => !element.complete));
  //const completed = todos.filter((todo) => !!todo.complete);
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!valueSearch.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((element) => {
      const todoText = element.text.toLowerCase();
      const searchedText = valueSearch.toLowerCase();
      return todoText.includes(searchedText);
    });
  }

  return (
    //envolver con este componente hace que no afecte la UI que es lo que pasa con div
    <React.Fragment>
      <TodoCounter todo={totalTodos} completed={completed} />
      <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TodoList>
        {searchedTodos.map((element) => (
          <TodoItem key={element.text} text={element.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
