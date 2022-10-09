import React from "react";
import "./InfoBlock2.css";
import { Link } from "react-router-dom";

function InfoBlock(colour) {
  return (
    <div className="infoBlockWrapper2">
      <Link to="/MovieList" style={{ textDecoration: "none" }}>
      <div className="textWrapper2">
        <b>Movie Generation</b>
        select parameters, generate movies
      </div>
      </Link>
    </div>
  );
}

export default InfoBlock;
