import React, { useEffect, useState } from "react";
import MovieListCard from "./MovieListCard";
import "./MovieListView.css";
import { Link } from "react-router-dom";

function MovieListView() {
  const [apiData, setApiData] = useState();

  async function getMoviesFromApi() {
    const response = await fetch(
      "http://ec2-54-183-191-117.us-west-1.compute.amazonaws.com:5000/movie_directory/get_processed_movies"
    );
    const responseJson = await response.json();
    console.log({ jsonResponse: responseJson });
    setApiData(responseJson)
  }

  useEffect(() => {
    getMoviesFromApi();
  }, []);


  return (
    <div className="movieListViewWrapper">
      <div className="movieListViewBlock">
        <div className="title">AIMDb Top Generated Movies</div>
        <div className="MovieListHeader">
          <h3>Title</h3>
          <p>AIMDb Rating</p>
        </div>

        {apiData?.map((movie) => (
          <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard
              title={movie.movie_title}
              rating={movie.movie_rating}
              img={movie.movie_image_link}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieListView;
