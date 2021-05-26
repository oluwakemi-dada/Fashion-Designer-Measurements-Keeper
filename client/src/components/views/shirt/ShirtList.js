import React from 'react';
import ShirtListItem from './ShirtListItem';
import { Wrapper, Title } from '../ViewsResources';

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
