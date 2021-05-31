import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';
import { Wrapper, Title } from './PageResources';

const CreateContact = (props) => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  });

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
    <Wrapper>
      <Title>Add Contact</Title>
      <ContactForm props={props} onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default CreateContact;
