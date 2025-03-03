import React, { createContext, useState, useCallback, useEffect } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [listCount, setListCount] = useState(0);

  const addToList = useCallback(
    (item) => {
      setList((prevList) => [...prevList, item]);
    },
    [setList]
  );

  const removeFromList = useCallback((id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }, []);

  useEffect(() => {
    setListCount(list.length);
  }, [list]);

  return (
    <ListContext.Provider
      value={{ list, addToList, removeFromList, listCount }}
    >
      {children}
    </ListContext.Provider>
  );
};
