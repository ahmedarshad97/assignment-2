import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import propertyReducer from './propertySlice';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
  middleware,
});

export default store;