import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactsFilter from '../contacts/ContactsFilter';

const Home = () => {
  return (
    <div className='center'>
      <ContactsFilter />
      <Contacts />
    </div>
  );
};

export default Home;
