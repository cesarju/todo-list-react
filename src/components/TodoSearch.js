import React from "react";
import { FcSearch } from "react-icons/fc";
import "../styles/Search.css";
//import { useState } from "react";

export const TodoSearch = ({ valueSearch, setValueSearch }) => {
  const onSearchValueChange = (valor1) => {
    setValueSearch(valor1.target.value);
  };

  /* Ejemplo para renderizar un componente 
 const [name, setName] = useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
  }; */
  return (
    <div>
      <section className="container">
        {/* <p>{valueSearch}</p> */}

        <input
          placeholder="Search task"
          id="search"
          onChange={onSearchValueChange}
          value={valueSearch}
        />
        <FcSearch className="icon-search" />
      </section>
      {/*
      <input placeholder="Nombre" onChange={onChangeName} value={name} />
       pintar el ejemplo
      <p>Nombre:</p>
      <img src={name} style={{ width: "400px" }} /> */}
    </div>
  );
};
