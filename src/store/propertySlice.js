import { createSlice } from '@reduxjs/toolkit';
import { fetchProperties } from './propertyActions';

const initialState = {
    loading: false,
    properties: [],
  };
  
  export const propertySlice = createSlice({
    name: 'Properties',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProperties.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProperties.fulfilled, (state, action) => {
          state.loading = false;
          state.properties = action.payload;
        })
        .addCase(fetchProperties.rejected, (state) => {
          state.loading = false;
        })
    },
  });



export default propertySlice.reducer;
