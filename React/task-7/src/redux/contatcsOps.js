import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6992cb0f8f29113acd3eec1c.mockapi.io/";

export const fetchContacts = createAsyncThunk("contatcs/fetchAll",
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("contacts");
            return response.data;
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk("tasks/addContact",
    async(contact, thunkAPI) => {
        try {
            const response = await axios.post("contacts", contact);
            return response.data;
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk("tasks/deleteContact",
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${contactId}`);
            return response.data;
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);