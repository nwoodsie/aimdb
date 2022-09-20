import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "material-ui-search-bar";
import PersonIcon from "@mui/icons-material/Person";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerWrapper">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="headerLogo">AIMDb</div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="menuButton">
          <HomeIcon sx={{ mr: 1 }} />
          Home
        </div>
      </Link>
      <SearchBar placeholder='Search all generated movies...' style={{ height: "2rem", width: "46rem", margin: "0.5rem" }} />
      <Link to="/MovieList" style={{ textDecoration: "none" }}>
        <div className="menuButton">
          <MenuIcon sx={{ mr: 1 }} />
          All Movies
        </div>
      </Link>
      <div className="menuButton">
        <ComputerTwoToneIcon sx={{ mr: 1 }} />
        Movie Gen
      </div>
      <div className="break"></div>
      <div className="menuButton">
        <PersonIcon sx={{ mr: 1 }} />
        Sign In
      </div>
    </div>
  );
}

export default Header;
