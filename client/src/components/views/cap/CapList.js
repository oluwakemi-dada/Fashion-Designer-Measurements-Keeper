import React from 'react';
import CapListItem from './CapListItem';

const CapList = ({ contact }) => {
  const { caps } = contact;
  return (
    <div>
      {caps && caps.length !== 0 && <h3>Cap</h3>}
      {caps &&
        caps.length !== 0 &&
        caps.map((cap) => <CapListItem key={cap.id} capp={cap} />)}
    </div>
  );
};

export default CapList;
