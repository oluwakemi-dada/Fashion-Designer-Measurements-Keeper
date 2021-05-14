import React, { useContext } from 'react';
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

const ViewContact = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  const contact = contacts.find(
    (contact) => contact.id === props.match.params.id
  );

  return (
    <div>
      {/* console.log(contact) */}
      <h1>Contact Info</h1>
      <General contact={contact} />
      <RoyalBrocadeTopList contact={contact} />
      <TrouserList contact={contact} />
      <AgbadaList contact={contact} />
      <CapList contact={contact} />
      <SuitTuxList contact={contact} />
      <WaistCoatList contact={contact} />
      <ShirtList contact={contact} />
      <FMeasurementList contact={contact} />
      <div>
        <button>EDIT CONTACT</button>
        <button>DELETE CONTACT</button>
      </div>
    </div>
  );
};

export default ViewContact;
