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


const movieData = [
    {
      title: "Bullet Train",
      rating: 7.5,
      img: "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    },
    {
      title: "My Neighbor Totoro",
      rating: 8.1,
      img: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "千と千尋の神隠し",
      rating: 8.6,
      img: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      title: "The Dark Knight Rises",
      rating: 8.4,
      img: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Grand Budapest Hotel",
      rating: 8.1,
      img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    },
  ];

  return (
    <div className="movieListViewWrapper">
      <div className="movieListViewBlock">
        <div className="title"> AIMDb Top Generated Movies</div>
        <div className="MovieListHeader">
          <h3>Title</h3>
          <h3>AIMDb Rating</h3>
          {/*<p>AIMDb Rating</p>*/}
        </div>

        {movieData?.map((movie) => (
          <Link to="/MovieCard" style={{ textDecoration: "none" }}>
            <MovieListCard
              title={movie.title}
              rating={movie.rating}
              img={movie.img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieListView;
