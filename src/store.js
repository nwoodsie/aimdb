import { configureStore } from '@reduxjs/toolkit'
import MovieCardSlice from './components/MovieListView/MovieCardSlice.js'

export default configureStore({
  reducer: {
    moviecard: MovieCardSlice
  }
})