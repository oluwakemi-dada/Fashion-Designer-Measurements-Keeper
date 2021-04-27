import React from 'react';

const GeneralForm = ({ generalData, setGeneralData }) => {
  const { name, phone, email, address, dob, anniversary } = generalData;

  const onChange = (e) => {
    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Address'
        name='address'
        value={address}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='D.O.B'
        name='dob'
        value={dob}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Anniversary'
        name='anniversary'
        value={anniversary}
        onChange={onChange}
      />
    </div>
  );
};

export default GeneralForm;
