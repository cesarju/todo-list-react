import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ todo, completed }) {
  return (
    <div className="TodoCounter">
      <h2>Simplest</h2>
      <h3>TASK LIST</h3>
      <h4>
        Haz completado {completed} de {todo} tareas
      </h4>
    </div>
  );
}

export { TodoCounter };
