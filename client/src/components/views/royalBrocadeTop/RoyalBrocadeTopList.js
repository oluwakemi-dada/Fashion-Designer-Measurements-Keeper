import React from 'react';
import RoyalBrocadeTopListItem from './RoyalBrocadeTopListItem';
import { Wrapper, Title } from '../ViewsResources';

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
