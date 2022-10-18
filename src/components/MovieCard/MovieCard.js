import React from "react";
import "./MovieCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";

function MovieCard() {
  const MovieListData = useSelector(state => state.moviecard)
  return (
    <div className="movieWrapper">
      <div className="backButton">
        <Link to="/MovieList" style={{ textDecoration: "none" }}>
          <ArrowBackIosIcon />
        </Link>
      </div>
      <div className="titleBlock">
        {MovieListData.title}
        <Rating rating={MovieListData.rating}/>
      </div>
      <div className="duration">2022 R 2h 27m</div>
      <div className="imageContainer">
        <img
          src={MovieListData.img}
          alt=""
        />
        <div className="plotContainer">
          <p>
            {MovieListData.plot}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
