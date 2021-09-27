import { createAsyncThunk } from "@reduxjs/toolkit";

import contactsAPI from "services/contactsAPI";

const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContactsData();
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
      const contact = await contactsAPI.postContactData(contactData);
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
      await contactsAPI.deleteContactData(contactId);
      return contactId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { getContacts, addContact, deleteContact };
