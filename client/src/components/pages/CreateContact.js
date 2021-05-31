import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';

const Wrapper = styled.div`
  padding: 1rem 10%;

  @media (max-width: 1024px) {
    padding: 1rem 7%;
  }

  @media (max-width: 768px) {
    padding: 1rem 6%;
  }

  @media (max-width: 650px) {
    padding: 1rem 4%;
  }

  @media (max-width: 450px) {
    padding: 1rem 0%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

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
