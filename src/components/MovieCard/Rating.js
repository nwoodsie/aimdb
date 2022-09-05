import React from 'react'
import './Rating.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Rating() {
  return (
    <div className="ratingWrapper">
        <div className="ratingText">
            AIMDb RATING
        </div>
        <div className="starsMetric">
            <StarRoundedIcon sx={{ color: '#f3ce13ed', fontSize: '2rem' }}/>
            <div className="starsRating">
                <div className="starsRatingNumber">
                    7.5/10
                </div>
                <div className="starsRatingVotes">
                    70K    
                </div> 
            </div>  
        </div>
    </div>

  )
}

export default Rating