[1mdiff --git a/src/components/HomePage/Homepage.js b/src/components/HomePage/Homepage.js[m
[1mindex 0aa9722..23bc615 100644[m
[1m--- a/src/components/HomePage/Homepage.js[m
[1m+++ b/src/components/HomePage/Homepage.js[m
[36m@@ -26,7 +26,7 @@[m [mfunction Homepage() {[m
             <b>Generate a Movie</b>[m
           </div>[m
           <div className="squaresWrapper">[m
[31m-            <Square />[m
[32m+[m[32m            <Square text='Hello'/>[m
             <Square />[m
             <Square />[m
             <Square />[m
[1mdiff --git a/src/components/HomePage/Square.js b/src/components/HomePage/Square.js[m
[1mindex 5963148..72b99c1 100644[m
[1m--- a/src/components/HomePage/Square.js[m
[1m+++ b/src/components/HomePage/Square.js[m
[36m@@ -11,7 +11,7 @@[m [mfunction Square() {[m
           Top 100 [m
         </div>[m
         <div className="lowerText">[m
[31m-          View top 100 movies[m
[32m+[m[32m          hello[m
         </div>[m
       </div>[m
     </div>[m
[1mdiff --git a/src/components/MovieCard/MovieCard.js b/src/components/MovieCard/MovieCard.js[m
[1mindex 952e76f..0f7c2b1 100644[m
[1m--- a/src/components/MovieCard/MovieCard.js[m
[1m+++ b/src/components/MovieCard/MovieCard.js[m
[36m@@ -1,4 +1,4 @@[m
[31m-import React, { useEffect, useState } from "react";[m
[32m+[m[32mimport React from "react";[m
 import "./MovieCard.css";[m
 import Rating from "./Rating";[m
 import { Link } from "react-router-dom";[m
[1mdiff --git a/src/components/MovieListView/MovieListCard.css b/src/components/MovieListView/MovieListCard.css[m
[1mindex b48d967..e4d68c8 100644[m
[1m--- a/src/components/MovieListView/MovieListCard.css[m
[1m+++ b/src/components/MovieListView/MovieListCard.css[m
[36m@@ -4,7 +4,7 @@[m
   width: 100%;[m
   height: 6rem;[m
   max-height: 6rem;[m
[31m-  border-bottom: 4px solid white;[m
[32m+[m[32m  margin-bottom: 4px;[m
 }[m
 [m
 .left {[m
[1mdiff --git a/src/components/MovieListView/MovieListView.js b/src/components/MovieListView/MovieListView.js[m
[1mindex 20651df..8e348ea 100644[m
[1m--- a/src/components/MovieListView/MovieListView.js[m
[1m+++ b/src/components/MovieListView/MovieListView.js[m
[36m@@ -12,13 +12,40 @@[m [mfunction MovieListView() {[m
     );[m
     const responseJson = await response.json();[m
     console.log({ jsonResponse: responseJson });[m
[31m-    setApiData(responseJson)[m
[32m+[m[32m    setApiData(responseJson);[m
   }[m
 [m
   useEffect(() => {[m
     getMoviesFromApi();[m
   }, []);[m
 [m
[32m+[m[32m  const movieData = [[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "Bullet Train",[m
[32m+[m[32m      rating: 7.5,[m
[32m+[m[32m      img: "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "My Neighbor Totoro",[m
[32m+[m[32m      rating: 8.1,[m
[32m+[m[32m      img: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "千と千尋の神隠し",[m
[32m+[m[32m      rating: 8.6,[m
[32m+[m[32m      img: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "The Dark Knight Rises",[m
[32m+[m[32m      rating: 8.4,[m
[32m+[m[32m      img: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m      title: "The Grand Budapest Hotel",[m
[32m+[m[32m      rating: 8.1,[m
[32m+[m[32m      img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",[m
[32m+[m[32m    },[m
[32m+[m[32m  ];[m
 [m
   return ([m
     <div className="movieListViewWrapper">[m
[36m@@ -29,12 +56,12 @@[m [mfunction MovieListView() {[m
           <p>AIMDb Rating</p>[m
         </div>[m
 [m
[31m-        {apiData?.map((movie) => ([m
[32m+[m[32m        {movieData?.map((movie) => ([m
           <Link to="/MovieCard" style={{ textDecoration: "none" }}>[m
             <MovieListCard[m
[31m-              title={movie.movie_title}[m
[31m-              rating={movie.movie_rating}[m
[31m-              img={movie.movie_image_link}[m
[32m+[m[32m              title={movie.title}[m
[32m+[m[32m              rating={movie.rating}[m
[32m+[m[32m              img={movie.img}[m
             />[m
           </Link>[m
         ))}[m
