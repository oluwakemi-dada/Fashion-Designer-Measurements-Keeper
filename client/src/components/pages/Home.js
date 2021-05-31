import React, {useEffect} from 'react';
import styled from 'styled-components';
import Contacts from '../contacts/Contacts';
import ContactsFilter from '../contacts/ContactsFilter';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Home = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  });

  return (
    <Center>
      <ContactsFilter />
      <Contacts />
    </Center>
  );
};

export default Home;