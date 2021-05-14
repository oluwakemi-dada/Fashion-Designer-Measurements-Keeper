import React from 'react';
import ShirtListItem from './ShirtListItem';

const ShirtList = ({ contact }) => {
  const { shirts } = contact;
  return (
    <div>
      {shirts && shirts.length !== 0 && <h3>Shirts</h3>}
      {shirts &&
        shirts.length !== 0 &&
        shirts.map((shirt) => <ShirtListItem key={shirt.id} shirt={shirt} />)}
    </div>
  );
};

export default ShirtList;
