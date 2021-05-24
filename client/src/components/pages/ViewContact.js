import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactContext from '../../context/contact/contactContext';
import General from '../views/General';
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
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const Button = styled.div`
  display: inline-block;
  background: #0078e7;
  padding: 1rem 1.3rem;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  &:hover {
    background: #0370d6;
  }
`;

const ViewContact = (props) => {
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
        <Link to={`/edit/${contact.id}`} style={{ color: '#fff' }}>
          Edit Contact
        </Link>
      </Button>
    </Wrapper>
  );
};

export default ViewContact;
