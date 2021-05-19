import React, { useContext } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';

const CreateContact = (props) => {
  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;

  const onSubmit = (contact) => {
    console.log(contact);
    // Add formData to contact context
    if (contact.name !== '' && contact.phone !== '') {
      addContact(contact);
      props.history.push('/');
    }
  };
  return (
    <div>
      <h1>Add Contact</h1>
      <ContactForm props={props} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateContact;
