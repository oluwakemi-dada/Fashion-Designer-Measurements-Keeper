import React from 'react';
import RoyalBrocadeTopListItem from './RoyalBrocadeTopListItem';

const RoyalBrocadeTopList = ({ contact }) => {
  const { royalBrocadeTops } = contact;
  return (
    <div>
      {royalBrocadeTops && royalBrocadeTops.length !== 0 && <h3>Royal Brocade Top</h3>}
      {royalBrocadeTops && royalBrocadeTops.length !== 0 &&
        royalBrocadeTops.map((RBT) => (
          <RoyalBrocadeTopListItem key={RBT.id} RBT={RBT} />
        ))}
    </div>
  );
};

export default RoyalBrocadeTopList;
