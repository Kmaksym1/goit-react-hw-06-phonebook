import { nanoid } from "nanoid";

export const addContact = (name,number) => {
    return {
      type: "contacts/addContact",
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
};
export const deleteContacts = id => {
    return {
      type: "contacts/deleteContact",
      payload: id,
    };
};

  
export const filterContacts = query => {
    return {
      type: "contact/filter",
      payload: query,
    };
};
