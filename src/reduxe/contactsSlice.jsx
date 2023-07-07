import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
const contactsState = JSON.parse(localStorage.getItem('cont')) || [
  { id: 'id-1', name: 'Name Exampleeee', number: '459-12-56' },
  { id: 'id-2', name: 'Example Name', number: '443-89-12' },
];


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
          reducer(state, action) {
            const nameAlreadyInContacts = state.find(
                ({ name }) => name === action.payload.name
              );
              if (nameAlreadyInContacts) {
                return Notify.info(`${action.payload.name} is already in contacts`);
              }
              const updatedContactsAdd = [...state, action.payload];
            localStorage.setItem('cont', JSON.stringify(updatedContactsAdd))
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const updatedContactsDelete = state.filter(
        contacts => contacts.id !== action.payload
      );
      localStorage.setItem('cont', JSON.stringify(updatedContactsDelete)); // Update localStorage
      return updatedContactsDelete;
    },
  },
});

export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
