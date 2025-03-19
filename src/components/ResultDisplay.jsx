import React from "react";

const ResultDisplay = ({resultado, material}) => {
  return (
    <>
      {resultado && (
        <ul>
          <li>Quantidade:</li>
          <li>{resultado}</li>
          <li>Material:</li>
          <li>{material}</li>
        </ul>
      )}
    </>
  );
};

export default ResultDisplay;
