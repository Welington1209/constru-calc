import React, { useContext, useState, useEffect, useRef } from "react";

import { ListContext } from "../context/listContext";
import useCalculate from "../hooks/useCalculate";
import useCounter from "../hooks/useCounter";

import Construtor from "../img/construtor.png";

import "../styles/Tijolos.css";
import MaterialSelector from "../components/materialSelector";
import InputField from "../components/InputField";
import ActionButtons from "../components/ActionButtons";
import ResultDisplay from "../components/ResultDisplay";

import Door from "../img/door.svg";
import Window from "../img/window.svg";

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
    alternarEstadoDisplay,
    estadoDisplay,
    inputRef,
    areaDaJanela,
    areaDaPorta,
    numJanelas,
    setNumJanelas,
    numPortas,
    setNumPortas,
  } = useCalculate();

  const { count } = useCounter();

  const { addToList, addCount } = useContext(ListContext);

  const addItemToList = () => {
    if (resultado !== null) {
      addToList({ quantidade: resultado, material });
      alternarEstadoDisplay();
    }
    // inputRef.current.focus();
  };

  return (
    <div className="container">
      <div className="img">
        <img src={Construtor} alt="" />
      </div>

      <div className="content">
        <MaterialSelector material={material} setMaterial={setMaterial} />

        {estadoDisplay ? (
          <ResultDisplay resultado={resultado} material={material} />
        ) : (
          <div className="inputs">
            <InputField
              label="Comprimento da parede, em metros:"
              inputRef={inputRef}
              value={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
            />

            <InputField
              label={"Altura da parede, em metros:"}
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
        )}

        <div className="opening-container">
          <h3>Quantidade de esquadrias:</h3>
          <div className="opening">
            <div className="porta">
              <img src={Door} alt="" />
              <input
                className="input-opening"
                onChange={(e) => setNumPortas(e.target.value)}
                value={numPortas}
                type="number"
              />
            </div>

            <div className="janela">
              <img src={Window} width={"50px"} alt="" />
              <input
                className="input-opening"
                onChange={(e) => setNumJanelas(e.target.value)}
                value={numJanelas}
                type="number"
              />
            </div>
          </div>
        </div>

        <ActionButtons
          calculate={calculate}
          hiddenDisplay={alternarEstadoDisplay}
          estadoDisplay={estadoDisplay}
          addItemToList={addItemToList}
        />
      </div>
    </div>
  );
};

export default Tijolos;
