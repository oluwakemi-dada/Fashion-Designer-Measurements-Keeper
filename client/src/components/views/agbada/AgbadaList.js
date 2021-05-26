import React from 'react';
import AgbadaListItem from './AgbadaListItem';
import { Wrapper, Title } from '../ViewsResources';

const AgbadaList = ({ contact }) => {
  const { agbadas } = contact;
  return (
    <Wrapper>
      {agbadas && agbadas.length !== 0 && <Title>Agbada</Title>}
      {agbadas &&
        agbadas.length !== 0 &&
        agbadas.map((agbada) => (
          <AgbadaListItem key={agbada.id} agbada={agbada} />
        ))}
    </Wrapper>
  );
};

export default AgbadaList;
