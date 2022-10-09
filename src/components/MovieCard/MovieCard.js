import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";



function MovieCard() {
  return (
    <div className="movieWrapper">
      <div className="backButton">
        <Link to="/MovieList" style={{ textDecoration: "none" }}>
          <ArrowBackIosIcon />
        </Link>
      </div>
      <div className="titleBlock">
        Bullet Train
        <Rating />
      </div>
      <div className="duration">2022 R 2h 27m</div>
      <div className="imageContainer">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          alt=""
        />
        <div className="plotContainer">
          <p>
            In Tokyo, grieving father Yuichi Kimura seeks revenge after an
            unknown assailant pushes his son off a rooftop. Meanwhile, former
            assassin "Ladybug" is assigned to retrieve a briefcase from a bullet
            train bound for Kyoto. Also on the train are Yuichi, a young woman
            called the "Prince" who attacked his son, two assassin brothers
            called "Lemon" and "Tangerine" assigned to escort the briefcase, and
            the son of a Russian-born Yakuza boss known as the "White Death".
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
