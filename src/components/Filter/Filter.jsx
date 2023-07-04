import css from '../ContactList//contactList.Module.css';
import { useState } from 'react';
import { filterContacts } from '../../reduxe/actions';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const [query, setQueary] = useState('');

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const query = target.value;
    setQueary(query);
    dispatch(filterContacts(query));
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
