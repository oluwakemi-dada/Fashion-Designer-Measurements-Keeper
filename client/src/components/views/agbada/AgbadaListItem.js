import React from 'react';

const AgbadaListItem = ({ agbada }) => {
  const { name, sleeve, length } = agbada;
  return (
    <div>
      {name && <p>Name: {name}</p>}
      {sleeve && <p>Sleeve: {sleeve}</p>}
      {length && <p>Length: {length}</p>}
    </div>
  );
};

export default AgbadaListItem;
