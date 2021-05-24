import React from 'react';
import styled from 'styled-components';
import RoyalBrocadeTopListItem from './RoyalBrocadeTopListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const RoyalBrocadeTopList = ({ contact }) => {
  const { royalBrocadeTops } = contact;
  return (
    <Wrapper>
      {royalBrocadeTops && royalBrocadeTops.length !== 0 && (
        <Title>Royal Brocade Top</Title>
      )}
      {royalBrocadeTops &&
        royalBrocadeTops.length !== 0 &&
        royalBrocadeTops.map((RBT) => (
          <RoyalBrocadeTopListItem key={RBT.id} RBT={RBT} />
        ))}
    </Wrapper>
  );
};

export default RoyalBrocadeTopList;
