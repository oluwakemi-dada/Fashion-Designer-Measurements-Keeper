import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    anniversary: '',
    // royalBrocadeTop: null,
    // trouser: null,
    // agbada: null,
    // cap: null,
    // suitTux: null,
    // waistCoat: null,
    // shirt: null,
    // femaleMeasurements: null,
  });

  const { name, phone, email, address, dob, anniversary } = contact;

  const onChange = (e) =>
    setContact({
      [e.target.name]: e.target.value,
    });

  return (
    <form>
      <h2>Add Contact</h2>
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
      <button type="submit">ADD CONTACT</button>
    </form>
  );
};

export default ContactForm;
