import React from "react";
import { FcSearch } from "react-icons/fc";
import "../styles/Search.css";

export const TodoSearch = () => {
  return (
    <section className="container">
      <input placeholder="Search task" id="search" />
      <FcSearch className="icon-search" />
    </section>
  );
};
