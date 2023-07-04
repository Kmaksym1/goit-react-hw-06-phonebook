import { combineReducers } from 'redux';
import { Notify } from 'notiflix';

const contactsState = [
  { id: 'id-1', name: 'Name Exampleeee', number: '459-12-56' },
  { id: 'id-2', name: 'Example Name', number: '443-89-12' },
];
const contactsReducer = (state = JSON.parse(localStorage.getItem('cont')) || contactsState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const nameAlreadyInContacts = state.find(
        ({ name }) => name === action.payload.name
      );
      if (nameAlreadyInContacts) {
        return Notify.info(`${action.payload.name} is already in contacts`);
      }
    
      const updatedContactsAdd = [...state, action.payload];
      localStorage.setItem('cont', JSON.stringify(updatedContactsAdd)); // Update localStorage
      return updatedContactsAdd;
    case 'contacts/deleteContact':
      const updatedContactsDelete = state.filter(contacts => contacts.id !== action.payload);
      localStorage.setItem('cont', JSON.stringify(updatedContactsDelete)); // Update localStorage
      return updatedContactsDelete;
    default:
      return state;
  }
};

const filterReducer = (state="", action)=>{

  switch (action.type) {  
    case 'contact/filter':
      console.log(action.payload)
      state = action.payload
      // const filtered = state.filter(({ name }) => name.toLowerCase().includes(action.payload));
      // localStorage.setItem('cont', JSON.stringify(updatedContactsFiltered)); // Update localStorage
      return state
    
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
