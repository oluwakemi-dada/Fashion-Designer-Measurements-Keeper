import React from 'react';
import styled from 'styled-components';
import CapListItem from './CapListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

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
