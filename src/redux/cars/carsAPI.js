import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://65bccb30b51f9b29e9324a6b.mockapi.io/`;

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts?p=${page}&limit=12`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getAllCarsWithoutPage = createAsyncThunk(
  'cars/getAllCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/adverts`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
