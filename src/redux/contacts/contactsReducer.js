import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperations";
import { changeFilter } from "./contactsActions";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,

  [addContact.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,

  [deleteContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
