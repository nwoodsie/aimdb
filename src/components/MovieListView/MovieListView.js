import React, { useEffect, useState } from "react";
import MovieListCard from "./MovieListCard";
import "./MovieListView.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovieCardData } from "./MovieCardSlice";

function MovieListView() {
  // eslint-disable-next-line
  const [apiData, setApiData] = useState();

  const dispatch = useDispatch();

  async function getMoviesFromApi() {
    const response = await fetch(
      "http://ec2-54-183-241-226.us-west-1.compute.amazonaws.com:5000/movie_directory/get_processed_movies"
    );
    const responseJson = await response.json();
    console.log({ jsonResponse: responseJson });
    setApiData(responseJson);
  }

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  const movieData = [
    {
      movie_title: "Bullet Train",
      movie_rating: '7.5',
      movie_img: "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      movie_plot: "Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.",
    },
    {
      movie_title: "My Neighbor Totoro",
      movie_rating: '8.1',
      movie_img: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      movie_plot: "This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.",
    },
    {
      movie_title: "Spirted Away",
      movie_rating: '8.6',
      movie_img: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      movie_plot: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
    },
    {
      movie_title: "The Dark Knight Rises",
      movie_rating: '8.4',
      movie_img: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
      movie_plot: "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.",
    },
    {
      movie_title: "The Grand Budapest Hotel",
      movie_rating: '8.1',
      movie_img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
      movie_plot: "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.",
    },
  ];

  return (
    <div className="movieListViewWrapper">
      <div className="movieListViewBlock">
        <div className="title">AIMDb Top Generated Movies</div>
        <div className="MovieListHeader">
          <h3>Title</h3>
          <p>AIMDb Rating</p>
        </div>
        {apiData?.map((movie) => (
          <Link
            to="/MovieCard"
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(
              setMovieCardData({
                title: movie.movie_title,
                rating: movie.movie_rating,
                plot: movie.movie_plot,
                img: movie.movie_image_link,
              })
            )}
          >
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
