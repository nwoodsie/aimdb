import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import HomePage from "./components/HomePage/Homepage";
import MovieListView from "./components/MovieListView/MovieListView";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieGen from "./components/MovieGen/MovieGen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path='/MovieList' element={<MovieListView />}/>
            <Route exact path='/MovieCard' element={<MovieCard />}/>
            <Route exact path='/MovieGenerator' element={<MovieGen />}/>
            <Route exact path='/' element={<HomePage />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
