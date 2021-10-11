import { createSelector } from "reselect";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getError = (state) => state.contacts.error;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  }
);

export { getContacts, getFilter, getError, getFilteredContacts };
