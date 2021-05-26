import React from 'react';
import TrouserListItem from './TrouserListItem';
import { Wrapper, Title } from '../ViewsResources';

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
