import { createSlice } from '@reduxjs/toolkit'

export const movieListSlice = createSlice({
  name: 'movie',
  initialState: {title: '', rating: '', img: ''},
  reducers: {
    ADD_MOVIE: (state, action) => {
      state.arr.push(action.payload)
    }
  }
})

export const { ADD_MOVIE } = movieListSlice.actions

export default movieListSlice.reducer