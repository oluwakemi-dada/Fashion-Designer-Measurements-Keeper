import React, { useContext } from 'react';
import styled from 'styled-components';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';

const Wrapper = styled.div`
  padding: 1rem 10%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

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
    <Wrapper>
      <Title>Add Contact</Title>
      <ContactForm props={props} onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default CreateContact;
