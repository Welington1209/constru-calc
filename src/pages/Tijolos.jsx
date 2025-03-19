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
    inputRef,
  } = useCalculate();

  const { count } = useCounter();

  const { addToList, addCount } = useContext(ListContext);

  const addItemToList = () => {
    if (resultado !== null) {
      addToList({ quantidade: resultado, material });
    }
    setResultado(null);
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <div className="img">
        <img src={Construtor} alt="" />
      </div>

      <div className="content">
        <MaterialSelector material={material} setMaterial={setMaterial} />

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

        <ActionButtons
          calculate={calculate}
          resultado={resultado}
          addItemToList={addItemToList}
        />

        <ResultDisplay resultado={resultado} material={material} />
      </div>
    </div>
  );
};

export default Tijolos;
