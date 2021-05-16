import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import GeneralForm from '../form/GeneralForm';
import RoyalBrocadeForm from '../form/RoyalBrocadeForm';
import TrouserForm from '../form/TrouserForm';
import AgbadaForm from '../form/AgbadaForm';
import CapForm from '../form/CapForm';
import SuitTuxForm from '../form/SuitTuxForm';
import WaistCoatForm from '../form/WaistCoatForm';
import ShirtForm from '../form/ShirtForm';
import FemaleMeasurementForm from '../form/FemaleMeasurementForm';
// import ContactContext from '../../context/contact/contactContext';

const ContactForm = ({ props, onSubmit, contact }) => {
  // const contactContext = useContext(ContactContext);
  // const { deleteContact } = contactContext;

  // GENERAL DATA
  const [generalData, setGeneralData] = useState({
    name: contact ? contact.name : '',
    phone: contact ? contact.phone : '',
    email: contact ? contact.email : '',
    address: contact ? contact.address : '',
    dob: contact ? contact.dob : '',
    anniversary: contact ? contact.anniversary : '',
  });

  // ROYAL BROCADE TOP DATA
  const [royalBrocadeTopArr, setRoyalBrocadeTopArr] = useState(
    contact && contact.royalBrocadeTops ? [...contact.royalBrocadeTops] : []
  );

  // TROUSER DATA
  const [trouserArr, setTrouserArr] = useState(
    contact && contact.trousers ? [...contact.trousers] : []
  );

  // AGBADA DATA
  const [agbadaArr, setAgbadaArr] = useState(
    contact && contact.agbadas ? [...contact.agbadas] : []
  );

  // CAP DATA
  const [capArr, setCapArr] = useState(
    contact && contact.caps ? [...contact.caps] : []
  );

  // SUIT TUX DATA
  const [suitTuxArr, setSuitTuxArr] = useState(
    contact && contact.suitTuxes ? [...contact.suitTuxes] : []
  );

  // WAIST COAT DATA
  const [waistCoatArr, setWaistCoatArr] = useState(
    contact && contact.waistCoats ? [...contact.waistCoats] : []
  );

  // SHIRT DATA
  const [shirtArr, setShirtArr] = useState(
    contact && contact.shirts ? [...contact.shirts] : []
  );

  // FEMALE MEASUREMENT DATA
  const [femaleMeasurementArr, setFemaleMeasurementArr] = useState(
    contact && contact.femaleMeasurements ? [...contact.femaleMeasurements] : []
  );

  // ADD ROYAL BROCADE FORM
  const addRoyalBrocadeTopForm = () => {
    setRoyalBrocadeTopArr([
      ...royalBrocadeTopArr,
      {
        id: uuid(),
        name: '',
        back: '',
        chest: '',
        length: '',
        roundSleeve: '',
        sleeveLength: '',
        shortSleeveLength: '',
        stomach: '',
        neck: '',
        cuffWrist: '',
        threeFourSleeve: '',
        threeFourRoundSleeve: '',
      },
    ]);
  };

  // ADD TROUSER FORM
  const addTrouserForm = () => {
    setTrouserArr([
      ...trouserArr,
      {
        id: uuid(),
        name: '',
        waist: '',
        lap: '',
        length: '',
        knee: '',
        flap: '',
        hip: '',
        lowerLimb: '',
        mouthAnkle: '',
      },
    ]);
  };

  // ADD AGBADA FORM
  const addAgbadaForm = () => {
    setAgbadaArr([
      ...agbadaArr,
      {
        id: uuid(),
        name: '',
        sleeve: '',
        length: '',
      },
    ]);
  };

  // ADD CAP FORM
  const addCapForm = () => {
    setCapArr([
      ...capArr,
      {
        id: uuid(),
        name: '',
        cap: '',
      },
    ]);
  };

  // ADD SUIT TUX FORM
  const addSuitTuxForm = () => {
    setSuitTuxArr([
      ...suitTuxArr,
      {
        id: uuid(),
        name: '',
        back: '',
        chest: '',
        length: '',
        roundSleeve: '',
        sleeveLength: '',
        stomach: '',
        cuffWrist: '',
        lapel: '',
      },
    ]);
  };

  // ADD WAIST COAT FORM
  const addWaistCoatForm = () => {
    setWaistCoatArr([
      ...waistCoatArr,
      {
        id: uuid(),
        name: '',
        chest: '',
        stomach: '',
        length: '',
      },
    ]);
  };

  // ADD SHIRT FORM
  const addShirtForm = () => {
    setShirtArr([
      ...shirtArr,
      {
        id: uuid(),
        name: '',
        back: '',
        chest: '',
        length: '',
        roundSleeve: '',
        sleeveLength: '',
        shortSleeveLength: '',
        stomach: '',
        neck: '',
        cuffWrist: '',
      },
    ]);
  };

  // ADD FEMALE MEASUREMENT FORM
  const addFemaleMeasurementForm = () => {
    setFemaleMeasurementArr([
      ...femaleMeasurementArr,
      {
        id: uuid(),
        name: '',
        shoulder: '',
        bust: '',
        underBust: '',
        shoulderToBust: '',
        stomach: '',
        neck: '',
        sleeveLength: '',
        roundSleeve: '',
        halfLength: '',
        hip: '',
        blouseLengthLong: '',
        blouseLengthShort: '',
        gownLengthLong: '',
        gownLengthShort: '',
        dressLengthLong: '',
        dressLengthShort: '',
      },
    ]);
  };

  // FORM SUBMIT
  const onSubmitForm = (e) => {
    e.preventDefault();
    // Form Data
    const formData = {
      name: generalData.name,
      phone: generalData.phone,
      email: generalData.email,
      address: generalData.address,
      dob: generalData.dob,
      anniversary: generalData.anniversary,
      royalBrocadeTops: royalBrocadeTopArr,
      trousers: trouserArr,
      agbadas: agbadaArr,
      caps: capArr,
      suitTuxes: suitTuxArr,
      waistCoats: waistCoatArr,
      shirts: shirtArr,
      femaleMeasurements: femaleMeasurementArr,
    };

    // Call function that adds formData to contact context
    onSubmit(formData);
  };

  return (
    <div>
      <div>
        <button onClick={addRoyalBrocadeTopForm}>Royal Brocade Top</button>
        <button onClick={addTrouserForm}>Trouser</button>
        <button onClick={addAgbadaForm}>Agbada</button>
        <button onClick={addCapForm}>Cap</button>
        <button onClick={addSuitTuxForm}>Suit Tux</button>
        <button onClick={addWaistCoatForm}>Waist Coat</button>
        <button onClick={addShirtForm}>Shirt</button>
        <button onClick={addFemaleMeasurementForm}>Female Measurement</button>
      </div>

      <form onSubmit={onSubmitForm}>
        {/* GENERAL FORM */}
        <GeneralForm
          generalData={generalData}
          setGeneralData={setGeneralData}
        />

        {/* ROYAL BROCADE TOP FORM */}
        {royalBrocadeTopArr.length !== 0 && <h2>Royal Brocade Top</h2>}
        {royalBrocadeTopArr.length !== 0 &&
          royalBrocadeTopArr.map((top, index) => (
            <RoyalBrocadeForm
              key={index}
              index={index}
              royalBrocadeTopArr={royalBrocadeTopArr}
              setRoyalBrocadeTopArr={setRoyalBrocadeTopArr}
            />
          ))}

        {/* TROUSER FORM */}
        {trouserArr.length !== 0 && <h2>Trouser</h2>}
        {trouserArr.length !== 0 &&
          trouserArr.map((trouser, index) => (
            <TrouserForm
              key={index}
              index={index}
              trouserArr={trouserArr}
              setTrouserArr={setTrouserArr}
            />
          ))}

        {/* AGBADA FORM */}
        {agbadaArr.length !== 0 && <h2>Agbada</h2>}
        {agbadaArr.length !== 0 &&
          agbadaArr.map((agbada, index) => (
            <AgbadaForm
              key={index}
              index={index}
              agbadaArr={agbadaArr}
              setAgbadaArr={setAgbadaArr}
            />
          ))}

        {/* CAP FORM */}
        {capArr.length !== 0 && <h2>Cap</h2>}
        {capArr.length !== 0 &&
          capArr.map((cap, index) => (
            <CapForm
              key={index}
              index={index}
              capArr={capArr}
              setCapArr={setCapArr}
            />
          ))}

        {/* SUIT TUX FORM */}
        {suitTuxArr.length !== 0 && <h2>Suit Tux</h2>}
        {suitTuxArr.length !== 0 &&
          suitTuxArr.map((suitTux, index) => (
            <SuitTuxForm
              key={index}
              index={index}
              suitTuxArr={suitTuxArr}
              setSuitTuxArr={setSuitTuxArr}
            />
          ))}

        {/* WAIST COAT FORM */}
        {waistCoatArr.length !== 0 && <h2>Waist Coat</h2>}
        {waistCoatArr.length !== 0 &&
          waistCoatArr.map((waistCoat, index) => (
            <WaistCoatForm
              key={index}
              index={index}
              waistCoatArr={waistCoatArr}
              setWaistCoatArr={setWaistCoatArr}
            />
          ))}

        {/* SHIRT FORM */}
        {shirtArr.length !== 0 && <h2>Shirt</h2>}
        {shirtArr.length !== 0 &&
          shirtArr.map((shirt, index) => (
            <ShirtForm
              key={index}
              index={index}
              shirtArr={shirtArr}
              setShirtArr={setShirtArr}
            />
          ))}

        {/* FEMALE MEASUREMENT FORM */}
        {femaleMeasurementArr.length !== 0 && <h2>Female Measurement</h2>}
        {femaleMeasurementArr.length !== 0 &&
          femaleMeasurementArr.map((female, index) => (
            <FemaleMeasurementForm
              key={index}
              index={index}
              femaleMeasurementArr={femaleMeasurementArr}
              setFemaleMeasurementArr={setFemaleMeasurementArr}
            />
          ))}

        <button type='submit' onSubmit={onSubmit}>
          {contact ? 'EDIT  CONTACT' : 'ADD CONTACT'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
