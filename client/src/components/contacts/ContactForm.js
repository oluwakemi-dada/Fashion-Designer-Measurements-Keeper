import React, { useState } from 'react';
import styled from 'styled-components';
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

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;
`;
const Button = styled.div`
  background: #f4f4f4;
  box-shadow: 0.05rem 0.05rem 0.3rem #999;
  padding: 2rem 1rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const ContactForm = ({ onSubmit, contact }) => {
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
      <ButtonsWrapper>
        <Button onClick={addRoyalBrocadeTopForm}>Royal Brocade Top</Button>
        <Button onClick={addTrouserForm}>Trouser</Button>
        <Button onClick={addAgbadaForm}>Agbada</Button>
        <Button onClick={addCapForm}>Cap</Button>
        <Button onClick={addSuitTuxForm}>Suit Tux</Button>
        <Button onClick={addWaistCoatForm}>Waist Coat</Button>
        <Button onClick={addShirtForm}>Shirt</Button>
        <Button onClick={addFemaleMeasurementForm}>Female Measurement</Button>
      </ButtonsWrapper>

      <form onSubmit={onSubmitForm}>
        {/* GENERAL FORM */}
        <Title>General Form</Title>
        <GeneralForm
          generalData={generalData}
          setGeneralData={setGeneralData}
        />

        {/* ROYAL BROCADE TOP FORM */}
        {royalBrocadeTopArr.length !== 0 && <Title>Royal Brocade Top</Title>}
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
        {trouserArr.length !== 0 && <Title>Trouser</Title>}
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
        {agbadaArr.length !== 0 && <Title>Agbada</Title>}
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
        {capArr.length !== 0 && <Title>Cap</Title>}
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
        {suitTuxArr.length !== 0 && <Title>Suit Tux</Title>}
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
        {waistCoatArr.length !== 0 && <Title>Waist Coat</Title>}
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
        {shirtArr.length !== 0 && <Title>Shirt</Title>}
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
        {femaleMeasurementArr.length !== 0 && <Title>Female Measurement</Title>}
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
          {contact ? 'UPDATE  CONTACT' : 'ADD CONTACT'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
