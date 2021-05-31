import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactContext from '../../context/contact/contactContext';
import General from '../views/general/General';
import RoyalBrocadeTopList from '../views/royalBrocadeTop/RoyalBrocadeTopList';
import TrouserList from '../views/trouser/TrouserList';
import AgbadaList from '../views/agbada/AgbadaList';
import CapList from '../views/cap/CapList';
import SuitTuxList from '../views/suitTux/SuitTuxList';
import WaistCoatList from '../views/waistCoat/WaistCoatList';
import ShirtList from '../views/shirt/ShirtList';
import FMeasurementList from '../views/femaleMeasurement/FMeasurementList';

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
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  });

  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  const contact = contacts.find(
    (contact) => contact.id === props.match.params.id
  );

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
        <Link to={`/edit/${contact.id}`} style={styles.link}>
          Edit Contact
        </Link>
      </Button>
    </Wrapper>
  );
};

export default ViewContact;
