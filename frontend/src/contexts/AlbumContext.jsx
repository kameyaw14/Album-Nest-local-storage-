import React, { createContext, useEffect, useReducer, useState } from "react";
import { AlbumReducer } from "../reducers/albumReducer";

const AlbumContext = createContext();

const AlbumContextProvider = (props) => {
  const [albumList, dispatch] = useReducer(AlbumReducer, [], () => {
    const localData = localStorage.getItem("albums");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albumList));
  }, [albumList]);

  return (
    <AlbumContext.Provider value={{ albumList, dispatch }}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export { AlbumContextProvider, AlbumContext };
