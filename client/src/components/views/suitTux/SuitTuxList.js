import React from 'react';
import SuitTuxListItem from './SuitTuxListItem';

const SuitTuxList = ({ contact }) => {
  const { suitTuxes } = contact;
  return (
    <div>
      {suitTuxes && suitTuxes.length !== 0 && <h3>Suit Tux</h3>}
      {suitTuxes &&
        suitTuxes.length !== 0 &&
        suitTuxes.map((suitTux) => (
          <SuitTuxListItem key={suitTux.id} suitTux={suitTux} />
        ))}
    </div>
  );
};

export default SuitTuxList;
