import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from "material-ui-search-bar";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <div className="headerWrapper">
        <div className="headerLogo">
            AIMDb
        </div>
        <div className="menuButton">
            <MenuIcon sx={{ mr: 1 }} />
            Menu
        </div>
        <SearchBar style={{height:'2rem', width: '46rem', margin: '0.5rem'}}/>
        <div className="menuButton">
            <BookmarkAddIcon sx={{ mr: 1 }} />
            Watchlist
        </div>
        <div className="menuButton">
            <PersonIcon sx={{ mr: 1 }} />
            Sign In
        </div>
        <div className="menuButton">
            <SettingsIcon />
        </div>
    </div>
  )
}

export default Header