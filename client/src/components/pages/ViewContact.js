import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';
import General from '../views/general/General';
import RoyalBrocadeTopList from '../views/royalBrocadeTop/RoyalBrocadeTopList';
import TrouserList from '../views/trouser/TrouserList';
import AgbadaList from '../views/agbada/AgbadaList';
import CapList from '../views/cap/CapList';
import SuitTuxList from '../views/suitTux/SuitTuxList';
import WaistCoatList from '../views/waistCoat/WaistCoatList';
import ShirtList from '../views/shirt/ShirtList';
import FMeasurementList from '../views/femaleMeasurement/FMeasurementList';
import { Wrapper, Title } from './PageResources';

const Button = styled.div`
  display: inline-block;
  background: #0078e7;
  height: 4rem;
  width: 11rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  &:hover {
    background: #0370d6;
  }
`;

const styles = {
  link: {
    color: '#fff',
    height: '4rem',
    width: '11rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const ViewContact = (props) => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { contacts, getContacts } = contactContext;
  const { loadUser } = authContext;

  // if (contacts === null) {
  //   getContacts();
  //   console.log(contacts);
  // }

  // const contact = contacts.find(
  //   (contact) => contact._id === props.match.params.id
  // );
  let contact;

  if (contacts) {
    contact = contacts.find((contact) => contact._id === props.match.params.id);
  } else {
    getContacts();
    // console.log(contacts);
    contact = contacts.find((contact) => contact._id === props.match.params.id);
  }

  useEffect(() => {
    loadUser();
    console.log(contacts);
    // Scroll to top
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [contacts]);

  return (
    <Wrapper>
      <Title>Contact Info</Title>
      <General contact={contact} />
      <RoyalBrocadeTopList contact={contact} />
      <TrouserList contact={contact} />
      <AgbadaList contact={contact} />
      <CapList contact={contact} />
      <SuitTuxList contact={contact} />
      <WaistCoatList contact={contact} />
      <ShirtList contact={contact} />
      <FMeasurementList contact={contact} />
      <Button>
        <Link to={`/edit/${contact._id}`} style={styles.link}>
          Edit Contact
        </Link>
      </Button>
    </Wrapper>
  );
};

export default ViewContact;
