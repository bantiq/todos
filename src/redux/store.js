import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import photosReducer from './photos-reducer';

export default configureStore({
  reducer: {
    todos: todoReducer,
    photosPage: photosReducer
  }
})