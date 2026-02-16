import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const store = {
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  }
}

export default configureStore(store);