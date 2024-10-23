import React, { useContext } from "react";
import "./NavBar.css";
import { AlbumContext } from "../../contexts/AlbumContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { albumList } = useContext(AlbumContext);
  const navigate = useNavigate();
  return (
    <div className="navDiv">
      <div className="sec1">
        <h2 className="navLogo" onClick={() => navigate("/")}>
          AlbumHaven
        </h2>
        <p className="navText">
          You currently have {albumList.length} albums left
        </p>
      </div>
      <div className="sec2"></div>
    </div>
  );
};

export default NavBar;
