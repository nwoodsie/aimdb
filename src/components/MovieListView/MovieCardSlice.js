import { createSlice } from '@reduxjs/toolkit'
import { getStaticContextFromError } from '@remix-run/router'

export const MovieCardSlice = createSlice({
  name: 'moviecard',
  initialState: {
    title: '',
    plot: '',
    rating: '',
    img: ''
  },
  reducers: {
    setMovieCardData: (state, action) => {
      return {
        title: action.payload.title,
        plot: action.payload.plot,
        rating: action.payload.rating,
        img: action.payload.img
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMovieCardData } = MovieCardSlice.actions

export default MovieCardSlice.reducer