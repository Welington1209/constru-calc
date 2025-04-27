import React, { useState } from "react";
import { useContext } from "react";
import { ListContext } from "../context/listContext";
import "../styles/Lista.css";
import { FaTrash } from "react-icons/fa";
import ButtonPdfDownload from "../components/ButtonPdfDownload";
import Modal from "../components/Modal";

const Lista = () => {
  const { list, removeFromList } = useContext(ListContext);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="list-container">
      {list.length === 0 ? (
        <p>Não há nada na sua lista ainda!</p>
      ) : (
        <>
          <ul id="print-area" className="list-ul">
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
        </>
      )}
      {list.length > 0 && (
        <ButtonPdfDownload setModalVisible={setModalVisible} />
      )}
      {modalVisible && <Modal />}{" "}
    </div>
  );
};

export default Lista;
