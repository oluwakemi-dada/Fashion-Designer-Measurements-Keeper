import React, { useContext } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';

const EditContact = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, editContact, deleteContact } = contactContext;

  // Contact to edit
  const contactToEdit = contacts.find(
    (contact) => contact.id === props.match.params.id
  );

  const onSubmit = (contact) => {
    contact.id = props.match.params.id;
    console.log(contact);
    // Edit contact in contact context
    editContact(contact);
    props.history.push('/');
  };

  const onDeleteContact = () => {
    deleteContact(props.match.params.id);
    props.history.push('/');
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <ContactForm props={props} onSubmit={onSubmit} contact={contactToEdit} />
      <button onClick={onDeleteContact}>DELETE CONTACT</button>
    </div>
  );
};

export default EditContact;
