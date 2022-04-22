import React from "react";
import "../styles/Button.css";

export const CreateTodoButton = () => {
  const onClickButton = (msg) => {
    alert("se agrego la tarea " + msg);
  };
  return (
    <div className="container-btn">
      <button
        className="btn-plus"
        onClick={() => onClickButton("correctamente")}
      >
        +
      </button>
    </div>
  );
};
