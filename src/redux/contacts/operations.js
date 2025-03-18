import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// axios.defaults.baseURL = "https://66db802747d749b72ac95b5b.mockapi.io/project";

const api = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchData = createAsyncThunk(
  "phonebook/fetchData",
  async (body, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const { data } = await api.get("/contacts", body);
      return data;
    } catch (error) {
      toast.error(error.message, {duration: 6000});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "phonebook/contacts/add",
  async (body, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const { data } = await api.post("/contacts", body);
      toast.success(`${data.name} successfully added!`)
      return data;
    } catch (error) {
      toast.error(error.message, {duration: 6000});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "phonebook/contacts/edit",
  async (body, thunkAPI) => {
    try {
      const { id, ...values } = body;
      setAuthHeader(thunkAPI.getState().auth.token);
      const { data } = await api.patch(`/contacts/${id}`, { ...values });
      toast.success(`${data.name} successfully edited!`)
      return data;
    } catch (error) {
      toast.error(error.message, {duration: 6000});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "phonebook/contacts/delete",
  async (contactID, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      await api.delete(`/contacts/${contactID}`);
      toast.success(`Your contact successfully deleted!`)
      return contactID;
    } catch (error) {
      toast.error(error.message, {duration: 6000});
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
