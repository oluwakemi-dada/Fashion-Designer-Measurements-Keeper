import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ContactContext from '../../context/contact/contactContext';

const Form = styled.form`
  width: 30%;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 55%;
  }

  @media (max-width: 450px) {
    width: 60%;
  }

  @media (max-width: 360px) {
    width: 70%;
  }
`;

const FilterInput = styled.input`
  padding: 0.7rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  background: #f9f9f9;
  box-shadow: 0 0 0.2rem #666;
`;

const ContactsFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const onChangeFilter = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <FilterInput
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChangeFilter}
      />
    </Form>
  );
};

export default ContactsFilter;
