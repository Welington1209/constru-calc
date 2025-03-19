import React from "react";
import Bloco from "../img/blocos.svg";
import Tijolo from "../img/tijolos.svg";

const MaterialSelector = ({ material, setMaterial }) => {
  return (
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
  );
};

export default MaterialSelector;
