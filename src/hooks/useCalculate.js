import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function useCalculate() {
  const [material, setMaterial] = useState("tijolo");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const areaDaJanela = 1.2;
  const areaDaPorta = 1.68;

  const [numJanelas, setNumJanelas] = useState(0);
  const [numPortas, setNumPortas] = useState(0);

  const [estadoDisplay, setEstadoDisplay] = useState(false);

  const inputRef = useRef("");

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
      alert("Por favor, insira valores válidos!");
      return;
    }

    const area = comprimentoNum * alturaNum;
    const areaBloco = blocoAltura * blocoComprimento;

    const descontoDeEsquadria = () => {
      let descontoJanela = numJanelas * areaDaJanela;
      let descontoPorta = numPortas * areaDaPorta;

      return {
        descontoTotal: descontoJanela + descontoPorta,
      };
    };

    const { descontoTotal } = descontoDeEsquadria();

    const areaUtil = area - descontoTotal;
    const total = Math.ceil(areaUtil / areaBloco);

    setResultado(total);

    setEstadoDisplay(true);

    return total;
  };

  const alternarEstadoDisplay = () => {
    setEstadoDisplay(!estadoDisplay);
  };

  useEffect(() => {
    if (estadoDisplay) {
      setAltura("");
      setComprimento("");
      setNumJanelas(0);
      setNumPortas(0);
    } else {
      setMaterial("tijolo");
    }
  }, [estadoDisplay]);

  return {
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
  };
}
