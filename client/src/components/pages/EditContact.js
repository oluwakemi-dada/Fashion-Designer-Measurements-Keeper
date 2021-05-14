import React, { useContext } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';

const EditContact = (props) => {
  const contactContext = useContext(ContactContext);
  const { editContact } = contactContext;

  const onSubmit = (contact) => {
    console.log(contact);
    // Edit contact in contact context
    // editContact(contact);
    // props.history.push('/');
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <ContactForm props={props} onSubmit={onSubmit} />
    </div>
  );
};

export default EditContact;
