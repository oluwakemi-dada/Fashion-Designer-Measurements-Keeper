import React from 'react';

const WaistCoatListItem = ({ waistCoat }) => {
  const { name, chest, stomach, length } = waistCoat;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {chest && <p>Chest: {chest}</p>}
      {stomach && <p>Stomach: {stomach}</p>}
      {length && <p>Length: {length}</p>}
    </div>
  );
};

export default WaistCoatListItem;
