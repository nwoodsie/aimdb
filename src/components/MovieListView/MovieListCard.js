import React from 'react'
import './MovieListCard.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function MovieListCard({ title, rating, img }) {
  return (
    <div className='movieListCardWrapper'>
        <div className='left'>
            <img src={img} alt=''/>
            <b>{title}</b>
        </div>
        <div className='right'>
            <b>{rating}/10</b>
            <StarRoundedIcon sx={{ color: '#f3ce13ed', fontSize: '1rem' }}/>
        </div>
    </div>
  )
}

export default MovieListCard