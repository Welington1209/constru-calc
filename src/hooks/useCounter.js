import { useEffect } from "react";
import { useState } from "react";
import { ListContext } from "../context/listContext";
import { useContext } from "react";

export default function useCounter() {
  const { list, addToList, addCount } = useContext(ListContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  return { count };
}
