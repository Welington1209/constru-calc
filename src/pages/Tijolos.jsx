import React, { useContext, useState, useEffect } from "react";

import { ListContext } from "../context/listContext";
import useCalculate from "../hooks/useCalculate";
import useCounter from "../hooks/useCounter";

import Construtor from "../img/construtor.png";
import Bloco from "../img/blocos.svg";
import Tijolo from "../img/tijolos.svg";

import "../styles/Tijolos.css";

const Tijolos = () => {
  const {
    material,
    setMaterial,
    resultado,
    setResultado,
    comprimento,
    setComprimento,
    altura,
    setAltura,
    calculate,
  } = useCalculate();

  const { count } = useCounter();

  const { list, addToList, addCount } = useContext(ListContext);

  const addItemToList = () => {
    if (resultado !== null) {
      addToList({ quantidade: resultado, material }); // Adiciona ao contexto
    }
    setResultado(null);
  };

  return (
    <div className="container">
      <div className="img">
        <img src={Construtor} alt="" />
      </div>

      <div className="content">
        <div className="input-control radio">
          <h3>Tipo do material:</h3>

          <div>
            <label>
              <img
                className={material === "tijolo" ? "opacity" : "hidden"}
                src={Tijolo}
                alt=""
              />
              <p>Tijolo</p>

              <input
                value="tijolo"
                name="material"
                type="radio"
                checked={material === "tijolo"}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </label>
            <label>
              <img
                className={material === "bloco" ? "opacity" : "hidden"}
                src={Bloco}
                alt=""
              />
              <p>Bloco</p>

              <input
                value="bloco"
                name="material"
                type="radio"
                checked={material === "bloco"}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="input-control">
          <label>
            <p>Comprimento da parede, em metros:</p>
            <input
              type="number"
              value={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="input-control">
          <label>
            <p>Altura da parede, em metros:</p>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </label>
        </div>

        <button className="btn" onClick={() => calculate()}>
          {!resultado ? "Calcular" : "Calcular Novamente"}
        </button>

        {resultado && (
          <ul>
            <li>Quantidade:</li>
            <li>{resultado}</li>
            <li>Material:</li>
            <li>{material}</li>
          </ul>
        )}

        <button className="btn" onClick={() => addItemToList()}>
          Adicionar a Lista
        </button>

        <button className="btn">Continuar Somando</button>
      </div>
    </div>
  );
};

export default Tijolos;
