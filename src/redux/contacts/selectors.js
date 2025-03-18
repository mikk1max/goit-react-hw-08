import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName, selectFilterNumber } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

const selectFilterNameValue = selectFilterName;
const selectFilterNumberValue = selectFilterNumber;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterNameValue, selectFilterNumberValue],
  (contacts, filterNameValue, filterNumberValue) => {
    return contacts.filter((contact) => {
      if (filterNameValue !== "" && filterNumberValue !== "") {
        return (
          contact.name.toLowerCase().includes(filterNameValue.toLowerCase()) &&
          contact.number.toLowerCase().includes(filterNumberValue.toLowerCase())
        );
      } else if (filterNameValue !== "") {
        return contact.name
          .toLowerCase()
          .includes(filterNameValue.toLowerCase());
      } else if (filterNumberValue !== "") {
        return contact.number
          .toLowerCase()
          .includes(filterNumberValue.toLowerCase());
      }
      return contacts;
    });
  }
);
