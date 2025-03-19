import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function useCalculate() {
  const [material, setMaterial] = useState("tijolo");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

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
    inputRef,
  };
}
