import React from 'react';
import TrouserListItem from './TrouserListItem';

const TrouserList = ({ contact }) => {
  const { trousers } = contact;
  return (
    <div>
      {trousers && trousers.length !== 0 && <h3>Trouser</h3>}
      {trousers && trousers.length !== 0 &&
        trousers.map((trouser) => (
          <TrouserListItem key={trouser.id} trouser={trouser} />
        ))}
    </div>
  );
};

export default TrouserList;
