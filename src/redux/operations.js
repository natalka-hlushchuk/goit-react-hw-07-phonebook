import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6390a33465ff4183111a2236.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (info, thunkAPI) => {
    try {
      const response = await axios.post('contacts', info);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contactId}`);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
