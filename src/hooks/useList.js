import { useEffect } from "react";
import { useState } from "react";
import { ListContext } from "../context/listContext";
import { useContext } from "react";
import useCalculate from "./useCalculate";

export default function useList() {
  const { list, addToList, addCount } = useContext(ListContext);

  const { resultado, material, setResultado } = useCalculate();

  const addItemToList = () => {
    if (resultado !== null) {
      addToList({ quantidade: resultado, material }); // Adiciona ao contexto
    }
    setResultado(null);
  };

  return { addItemToList };
}
