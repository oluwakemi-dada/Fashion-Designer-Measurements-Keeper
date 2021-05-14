import React from 'react';
import WaistCoatListItem from './WaistCoatListItem';

const WaistCoatList = ({ contact }) => {
  const { waistCoats } = contact;
  return (
    <div>
      {waistCoats && waistCoats.length !== 0 && <h3>Waist Coat</h3>}
      {waistCoats &&
        waistCoats.length !== 0 &&
        waistCoats.map((waistCoat) => (
          <WaistCoatListItem key={waistCoat.id} waistCoat={waistCoat} />
        ))}
    </div>
  );
};

export default WaistCoatList;
