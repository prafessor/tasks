import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filtersSlice";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName) ||
        contact.number.includes(filterName)
    );
  }
);
