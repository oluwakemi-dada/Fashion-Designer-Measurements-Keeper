import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ContactContext from '../../context/contact/contactContext';

const Form = styled.form`
  width: 30%;
  margin-bottom: 2rem;
`;

const FilterInput = styled.input`
  padding: 0.7rem 1rem;
  width: 100%;
  /* border: 1px solid #444; */
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
  }, []);

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
