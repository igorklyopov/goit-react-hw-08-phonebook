import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchContactsData,
  postContactData,
  deleteContactData,
} from "services/contactsAPI";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsData();
      return contacts;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const contact = await postContactData(contactData);
      return contact;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactData(contactId);
      return contactId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { fetchContacts, addContact, deleteContact };
