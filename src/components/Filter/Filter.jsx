import css from '../ContactList//contactList.Module.css';
import { useState } from 'react';
import { filter } from '../../reduxe/filterSlice.jsx';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const query = target.value;
    setQuery(query);
    dispatch(filter(query));
  };

  return (
    <div className={css.findCOntacts}>
      <p className="form-label">Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={query}
        className={css.inputFindContacts}
        onChange={onChange}
      />
    </div>
  );
};
