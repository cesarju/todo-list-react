import React from "react";
import { FcApproval, FcFullTrash } from "react-icons/fc";
import "../styles/Item.css";

function TodoItem(props) {
  return (
    <li className="container-item">
      <FcApproval className="check" />
      <p className="task">{props.text}</p>
      <FcFullTrash className="trash" />
    </li>
  );
}
export { TodoItem };
