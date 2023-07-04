// import { Layout } from 'components/Layout/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from './ContactList/ContactList';


export const App = () => {
  return (
    <div
      style={{
        width: '50vh',
        display: 'block',
        fontSize: '40px',
        margin: 'auto',
      }}
    >
      {/* <Layout> */}
        <ContactForm />
        <Filter />
        <ContactList />
      {/* </Layout> */}
    </div>
  );
};
