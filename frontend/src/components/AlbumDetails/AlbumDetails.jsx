import React, { useContext } from "react";
import "./AlbumDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { AlbumContext } from "../../contexts/AlbumContext";

const AlbumDetails = () => {
  const { id } = useParams();
  const { albumList, dispatch } = useContext(AlbumContext);

  const artisteAlbum = albumList.find((item) => item.id === id);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Album Details</h1>
      {artisteAlbum ? (
        <div>
          <h2>{artisteAlbum.title}</h2>
          <p>Artiste: {artisteAlbum.artiste}</p>
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_ALBUM", id: artisteAlbum.id }); // Corrected here
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div>Album not found</div>
      )}
    </div>
  );
};

export default AlbumDetails;
