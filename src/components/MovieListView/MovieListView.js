import React from "react";
import MovieListCard from "./MovieListCard";
import "./MovieListView.css";
import { Link } from "react-router-dom";

function MovieListView() {
  return (
    <div className="movieListViewWrapper">
      <div className="movieListViewBlock">
        <div className="title">AIMDb Top Generated Movies</div>
        <div className="MovieListHeader">
          <h3>Title</h3>
          <p>AIMDb Rating</p>
        </div>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link><Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
        <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard />
        </Link>
      </div>
    </div>
  );
}

export default MovieListView;
