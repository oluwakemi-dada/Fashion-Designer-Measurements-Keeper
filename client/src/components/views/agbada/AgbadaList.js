import React from 'react';
import styled from 'styled-components';
import AgbadaListItem from './AgbadaListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

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
