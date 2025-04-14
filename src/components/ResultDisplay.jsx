import React from "react";
import "../components/styles/ResultDisplay.css";

const ResultDisplay = ({ resultado, material }) => {
  return (
    <>
      {resultado && (
        <ul className="display">
          <li>Material :</li>
          <li>{material}</li>
          <li>Quantidade :</li>
          <li>{resultado}</li>
        </ul>
      )}
    </>
  );
};

export default ResultDisplay;
