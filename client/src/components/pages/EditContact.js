import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ContactForm from '../contacts/ContactForm';
import ContactContext from '../../context/contact/contactContext';
import { Wrapper, Title } from './PageResources';

const ModalHeading = styled.h3`
  margin-bottom: 2.5rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.button`
  border: none;
  outline: none;
  width: 5rem;
  height: 3rem;
  background: #fff;
  color: #000;
  box-shadow: 0 0 0.2rem #999;

  &:hover {
    background: #000;
    color: #fff;
    transition: background 0.3s;
  }
`;

const EditContact = (props) => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // ModoL
    Modal.setAppElement('#root');
  });

  const [modalIsOpen, setIsOpen] = useState(false);

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onConfirmDeletion = () => {
    openModal();
  };

  const onDeleteContact = () => {
    closeModal();
    deleteContact(props.match.params.id);
    props.history.push('/');
  };

  const onCancelDeletion = () => {
    closeModal();
  };

  return (
    <Wrapper>
      <Title>Edit Contact</Title>
      <ContactForm
        props={props}
        onSubmit={onSubmit}
        contact={contactToEdit}
        onConfirmDeletion={onConfirmDeletion}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Confirm deletion'
        closeTimeoutMS={200}
        className='Modal'
        overlayClassName='Overlay'
      >
        <ModalHeading>Delete Contact?</ModalHeading>
        <ButtonsWrapper>
          <Button onClick={onDeleteContact}>YES</Button>
          <Button onClick={onCancelDeletion}>NO</Button>
        </ButtonsWrapper>
      </Modal>
    </Wrapper>
  );
};

export default EditContact;
