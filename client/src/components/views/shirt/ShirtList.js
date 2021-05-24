import React from 'react';
import styled from 'styled-components';
import ShirtListItem from './ShirtListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const ShirtList = ({ contact }) => {
  const { shirts } = contact;
  return (
    <Wrapper>
      {shirts && shirts.length !== 0 && <Title>Shirts</Title>}
      {shirts &&
        shirts.length !== 0 &&
        shirts.map((shirt) => <ShirtListItem key={shirt.id} shirt={shirt} />)}
    </Wrapper>
  );
};

export default ShirtList;
