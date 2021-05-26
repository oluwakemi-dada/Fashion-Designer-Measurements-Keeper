import React from 'react';
import CapListItem from './CapListItem';
import { Wrapper, Title } from '../ViewsResources';

const CapList = ({ contact }) => {
  const { caps } = contact;
  return (
    <Wrapper>
      {caps && caps.length !== 0 && <Title>Cap</Title>}
      {caps &&
        caps.length !== 0 &&
        caps.map((cap) => <CapListItem key={cap.id} capp={cap} />)}
    </Wrapper>
  );
};

export default CapList;
