import React, { useContext, useState } from "react";
import "./AlbumListForm.css";
import { AlbumContext } from "../../contexts/AlbumContext";
import { useNavigate } from "react-router-dom";

const AlbumListForm = () => {
  const { dispatch } = useContext(AlbumContext);
  const [name, setname] = useState("");
  const [artiste, setArtiste] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ALBUM",
      album: {
        title: name, // Corrected here
        artiste,
      },
    });
    setname("");
    setArtiste("");
    navigate("/");
  };

  return (
    <div>
      <h1>Add Album</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your favourite album..."
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artiste Name..."
          value={artiste}
          onChange={(e) => setArtiste(e.target.value)}
          required
        />
        <input type="submit" value="Add Album" />
      </form>
    </div>
  );
};

export default AlbumListForm;
