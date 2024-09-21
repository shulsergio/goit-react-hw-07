import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66ec53402b6cf2b89c5e17ea.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (a, thunkAPI) => {
    try {
      const response = await axios.get("/Contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
