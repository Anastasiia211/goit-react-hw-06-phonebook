import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContacts: (state, action) => {
            state.contacts = [...state.contacts, action.payload];
        },
        deleteContact: (state, action) => {
            state.contacts = action.payload;
        },
    },
});

export const { deleteContact, addContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contactsList',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
