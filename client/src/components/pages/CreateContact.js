import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';
import { Wrapper, Title } from './PageResources';

const CreateContact = (props) => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { addContact } = contactContext;
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // Scroll to top
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

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
