import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { properties } from '../utils/data';

//Fetch All Properties
export const fetchProperties = createAsyncThunk('blogs/fetchProperties', async () => {
    return properties;
  });
  