import React from "react";

const ActionButtons = ({ calculate, hiddenDisplay, estadoDisplay, addItemToList }) => {
  return (
    <>
      {!estadoDisplay ? (
        <button className="btn" onClick={calculate}>
          Calcular
        </button>
      ) : (
        <button className="btn" onClick={hiddenDisplay}>
          Calcular Novamente
        </button>
      )}

      <button className="btn" onClick={addItemToList}>
        Adicionar a Lista
      </button>
    </>
  );
};

export default ActionButtons;
