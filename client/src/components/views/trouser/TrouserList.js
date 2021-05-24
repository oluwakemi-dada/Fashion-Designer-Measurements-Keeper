import React from 'react';
import styled from 'styled-components';
import TrouserListItem from './TrouserListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const TrouserList = ({ contact }) => {
  const { trousers } = contact;
  return (
    <Wrapper>
      {trousers && trousers.length !== 0 && <Title>Trouser</Title>}
      {trousers &&
        trousers.length !== 0 &&
        trousers.map((trouser) => (
          <TrouserListItem key={trouser.id} trouser={trouser} />
        ))}
    </Wrapper>
  );
};

export default TrouserList;
