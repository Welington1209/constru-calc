import React, { useContext, useState, useEffect } from "react";
import "../styles/Tijolos.css";
import { ListContext } from "../context/listContext";
import Construtor from "../img/construtor.png";
import Bloco from "../img/blocos.svg";
import Tijolo from "../img/tijolos.svg";

const Tijolos = () => {
  const [material, setMaterial] = useState("tijolo");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const { list, addToList, addCount } = useContext(ListContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  let blocoAltura, blocoComprimento;

  const comprimentoNum = parseFloat(comprimento.replace(",", "."));
  const alturaNum = parseFloat(altura.replace(",", "."));

  const calculate = () => {
    if (material === "tijolo") {
      blocoAltura = 0.2;
      blocoComprimento = 0.2;
    } else if (material === "bloco") {
      blocoAltura = 0.2;
      blocoComprimento = 0.4;
    } else {
      return "Material inválido!";
    }

    if (isNaN(alturaNum) || isNaN(comprimentoNum)) {
      return "Por favor, insira valores válidos!";
    }

    const area = comprimentoNum * alturaNum;
    const areaBloco = blocoAltura * blocoComprimento;

    const total = Math.ceil(area / areaBloco);

    setResultado(total);

    return total;
  };

  useEffect(() => {
    if (resultado !== null) {
      setAltura("");
      setComprimento("");
    }
  }, [resultado]);

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
