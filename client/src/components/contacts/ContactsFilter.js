import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components'
import ContactContext from '../../context/contact/contactContext';

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
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChangeFilter}
      />
    </form>
  );
};

export default ContactsFilter;
