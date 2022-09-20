import React from 'react'
import './MovieListCard.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function MovieListCard() {
  return (
    <div className='movieListCardWrapper'>
        <div className='left'>
            <img src='https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' alt=''/>
            <b>Bullet Train</b>
        </div>
        <div className='right'>
            <b>7.5/10</b>
            <StarRoundedIcon sx={{ color: '#f3ce13ed', fontSize: '1rem' }}/>
        </div>
    </div>
  )
}

export default MovieListCard