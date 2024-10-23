import React, { useContext } from "react";
import "./AlbumList.css";
import { AlbumContext } from "../../contexts/AlbumContext";
import { useNavigate } from "react-router-dom";

const AlbumList = () => {
  const { albumList, dispatch } = useContext(AlbumContext);
  const navigate = useNavigate();

  return (
    <div className="">
      <h1 className="heading">Your Favourite Albums</h1>
      <button onClick={() => navigate("./add-album")} className="addBtn">
        ADD ALBUM
      </button>
      <ul className="list">
        {albumList.length > 0 ? (
          [...albumList].reverse().map((item) => (
            <li className="listItem" key={item.id}>
              <div onClick={() => navigate(`/albums/${item.id}`)}>
                <h2 className="albumTitle">{item.title}</h2>
                <p className="albumArtiste">{item.artiste}</p>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE_ALBUM", id: item.id })} // Corrected here
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <div>No Albums added</div>
        )}
      </ul>
    </div>
  );
};

export default AlbumList;
