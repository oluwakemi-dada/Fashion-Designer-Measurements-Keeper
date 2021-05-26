import React from 'react';
import SuitTuxListItem from './SuitTuxListItem';
import { Wrapper, Title } from '../ViewsResources';

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
