import css from '../ContactList/contactList.Module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'reduxe/actions';

const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);
  
  const dispatch = useDispatch();
  const vicibleContacts = contacts.filter(({ name }) =>
  name.toLowerCase().includes(filters))
  const handleDelete = (id) => { dispatch(deleteContacts(id)) };
  
  return (
    <div className="contactsContainer">
      <ul>
        {vicibleContacts.map(({ name, id, number }) => {
          return (
            <li key={id} className={css.liContainer}>
              {name}: {number}
              <button
                type="button"
                className={css.delBtn}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;