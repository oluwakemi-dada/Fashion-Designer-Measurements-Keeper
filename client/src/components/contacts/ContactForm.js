import React, { useState } from 'react';
import GeneralForm from '../form/GeneralForm';
import RoyalBrocadeForm from '../form/RoyalBrocadeForm';

const ContactForm = () => {
  // GENERAL DATA
  const [generalData, setGeneralData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    anniversary: '',
  });

  // ROYAL BROCADE TOP DATA
  const [royalBrocadeTopArr, setRoyalBrocadeTopArr] = useState([
    {
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

  // TROUSER DATA

  // AGBADA DATA

  // CAP DATA

  // SUIT TUX DATA

  // WAIST COAT DATA

  // SHIRT DATA

  // SHIRT DATA

  // FEMALE MEASUREMENT DATA

  // ----------------------------------------

  // ADD ROYAL BROCADE FORM
  const addRoyalBrocadeTopForm = () => {
    setRoyalBrocadeTopArr([
      ...royalBrocadeTopArr,
      {
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

  // ADD AGBADA FORM

  // ADD CAP FORM

  // ADD SUIT TUX FORM

  // ADD WAIST COAT FORM

  // ADD SHIRT FORM

  // ADD SHIRT FORM

  // ADD FEMALE MEASUREMENT FORM

  // FORM SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: generalData.name,
      phone: generalData.phone,
      email: generalData.email,
      address: generalData.address,
      dob: generalData.dob,
      anniversary: generalData.anniversary,
      royalBrocadeTop: royalBrocadeTopArr,
    };
    console.log(formData);
    // Add to contact context
  };

  return (
    <div>
      <div>
        <button onClick={addRoyalBrocadeTopForm}>Royal Brocade Top</button>
        <button>Trouser</button>
        <button>Agbada</button>
        <button>Cap</button>
        <button>Suit Tux</button>
        <button>Waist Coat</button>
        <button>Shirt</button>
        <button>Female Measurement</button>
      </div>

      <form onSubmit={onSubmit}>
        <h1>Add Contact</h1>

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
        <button type='submit' onSubmit={onSubmit}>
          ADD CONTACT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
