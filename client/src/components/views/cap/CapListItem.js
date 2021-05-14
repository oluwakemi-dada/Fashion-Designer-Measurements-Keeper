import React from 'react';

const CapListItem = ({ capp }) => {
  const { name, cap } = capp;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {cap && <p>Cap: {cap}</p>}
    </div>
  );
};

export default CapListItem;
