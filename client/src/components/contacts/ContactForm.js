import React, { useContext, useState } from 'react';
import FormContext from '../../context/form/formContext';
import GeneralForm from '../form/GeneralForm';
import RoyalBrocadeForm from '../form/RoyalBrocadeForm';

const ContactForm = () => {
  const formContext = useContext(FormContext);
  const { formData } = formContext;
  const { royalBrocadeTop } = formData;

  const [generalData, setGeneralData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    anniversary: '',
  });

  const [royalBrocadeTopData, setRoyalBrocadeTopData] = useState({
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
  });

  return (
    <form>
      <h2>Add Contact</h2>

      {/* GENERAL FORM */}
      <GeneralForm generalData={generalData} setGeneralData={setGeneralData} />

      {/* ROYAL BROCADE TOP FORM */}
      {royalBrocadeTop.length !== 0 &&
        royalBrocadeTop.map((RBF, index) => (
          <RoyalBrocadeForm
            key={index}
            royalBrocadeTopData={royalBrocadeTopData}
            setRoyalBrocadeTopData={setRoyalBrocadeTopData}
          />
        ))}
      <button type='submit'>ADD CONTACT</button>
    </form>
  );
};

export default ContactForm;
