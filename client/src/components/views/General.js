import React from 'react';

const General = ({ contact }) => {
  const { name, phone, email, address, dob, anniversary } = contact;
  return (
    <div>
      <h3>General Info</h3>
      {name && <p>Name: {name}</p>}
      {phone && <p>Phone: {phone}</p>}
      {email && <p>Email: {email}</p>}
      {address && <p>Address: {address}</p>}
      {dob && <p>D.O.B: {dob}</p>}
      {anniversary && <p>Anniversary: {anniversary}</p>}
    </div>
  );
};

export default General;
