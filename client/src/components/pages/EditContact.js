import React, { useContext } from 'react';
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
    if (contact.name !== '' && contact.phone !== '') {
      editContact(contact);
      props.history.push('/');
    }
  };

  const onDeleteContact = () => {
    // !!!!!!!!! Add confirmation !!!!!!!!!!!!!!
    deleteContact(props.match.params.id);
    props.history.push('/');
  };

  return (
    <Wrapper>
      <Title>Edit Contact</Title>
      <ContactForm
        props={props}
        onSubmit={onSubmit}
        contact={contactToEdit}
        onDeleteContact={onDeleteContact}
      />
    </Wrapper>
  );
};

export default EditContact;
