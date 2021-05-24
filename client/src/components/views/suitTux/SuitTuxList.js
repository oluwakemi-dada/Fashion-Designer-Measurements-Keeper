import React from 'react';
import styled from 'styled-components';
import SuitTuxListItem from './SuitTuxListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const SuitTuxList = ({ contact }) => {
  const { suitTuxes } = contact;
  return (
    <Wrapper>
      {suitTuxes && suitTuxes.length !== 0 && <Title>Suit Tux</Title>}
      {suitTuxes &&
        suitTuxes.length !== 0 &&
        suitTuxes.map((suitTux) => (
          <SuitTuxListItem key={suitTux.id} suitTux={suitTux} />
        ))}
    </Wrapper>
  );
};

export default SuitTuxList;
