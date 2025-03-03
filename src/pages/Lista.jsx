import React from "react";
import { useContext } from "react";
import { ListContext } from "../context/listContext";
import "../styles/Lista.css";
import { FaTrash } from "react-icons/fa";

const Lista = () => {
  const { list, removeFromList } = useContext(ListContext);
  return (
    <section className="container">
      {list.length === 0 ? (
        <p>Não há nada na sua lista ainda!</p>
      ) : (
        <ul className="list-ul">
          {list.map((item) => (
            <li key={item.id}>
              <p>Material: {item.material} </p>
              <p>Quantidade: {item.quantidade}</p>
              <FaTrash
                className="icon"
                onClick={() => removeFromList(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Lista;
