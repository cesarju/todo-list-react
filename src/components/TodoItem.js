import React from "react";
import { FcApproval, FcFullTrash } from "react-icons/fc";
import "../styles/Item.css";

function TodoItem({ text }) {
  const onComplete = () => {
    alert("Ya completaste la tarea " + text);
  };

  const onDelete = () => {
    alert("Borraste el todo " + text);
  };
  return (
    <li className="container-item">
      <FcApproval className="check" onClick={onComplete} />
      <p className="task">{text}</p>
      <FcFullTrash className="trash" onClick={onDelete} />
    </li>
  );
}
export { TodoItem };
