import React from 'react';
import styled from 'styled-components';
import WaistCoatListItem from './WaistCoatListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const WaistCoatList = ({ contact }) => {
  const { waistCoats } = contact;
  return (
    <Wrapper>
      {waistCoats && waistCoats.length !== 0 && <Title>Waist Coat</Title>}
      {waistCoats &&
        waistCoats.length !== 0 &&
        waistCoats.map((waistCoat) => (
          <WaistCoatListItem key={waistCoat.id} waistCoat={waistCoat} />
        ))}
    </Wrapper>
  );
};

export default WaistCoatList;
