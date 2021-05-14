import React from 'react';
import AgbadaListItem from './AgbadaListItem';

const AgbadaList = ({ contact }) => {
  const { agbadas } = contact;
  return (
    <div>
      {agbadas && agbadas.length !== 0 && <h3>Agbada</h3>}
      {agbadas &&
        agbadas.length !== 0 &&
        agbadas.map((agbada) => (
          <AgbadaListItem key={agbada.id} agbada={agbada} />
        ))}
    </div>
  );
};

export default AgbadaList;
