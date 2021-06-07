import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Contacts from '../contacts/Contacts';
import ContactsFilter from '../contacts/ContactsFilter';
import AuthContext from '../../context/auth/authContext';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // Scroll to top
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <Center>
      <ContactsFilter />
      <Contacts />
    </Center>
  );
};

export default Home;
