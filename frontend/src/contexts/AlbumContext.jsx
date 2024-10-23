import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AlbumContext = createContext();

const AlbumContextProvider = (props) => {
  const [albumList, setAlbumList] = useState([
    { title: "Stankonia", artiste: "Outkast", id: "1" },
    { title: "Stillmatic", artiste: "Nas", id: "2" },
    { title: "Graduation", artiste: "Kanye West", id: "3" },
  ]);
  4;
  const addAlbum = (title, artiste) => {
    setAlbumList([...albumList, { title, artiste, id: uuidv4() }]);
  };

  const removeAlbum = (id) => {
    setAlbumList(albumList.filter((item) => item.id !== id));
  };

  return (
    <AlbumContext.Provider value={{ albumList, addAlbum, removeAlbum }}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export { AlbumContextProvider, AlbumContext };
