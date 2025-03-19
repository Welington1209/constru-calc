import React from "react";

const ActionButtons = ({ calculate, resultado, addItemToList }) => {
  return (
    <>
      <button className="btn" onClick={calculate}>
        {!resultado ? "Calcular" : "Calcular Novamente"}
      </button>

      <button className="btn" onClick={addItemToList}>
        Adicionar a Lista
      </button>
    </>
  );
};

export default ActionButtons;
