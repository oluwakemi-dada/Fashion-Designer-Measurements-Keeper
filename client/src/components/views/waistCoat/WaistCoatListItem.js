import React from 'react';
import styled from 'styled-components';

const ListItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

const Field = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const Parameter = styled.span`
  background: #f1f1f1;
  width: 40%;
  padding: 0.5rem 1.5rem;
`;

const Value = styled.span`
  background: #f9f9f9;
  width: 100%;
  padding: 0.5rem 3rem;
`;

const WaistCoatListItem = ({ waistCoat }) => {
  const { name, chest, stomach, length } = waistCoat;

  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {chest && (
        <Field>
          <Parameter>Chest</Parameter>
          <Value>{chest}</Value>
        </Field>
      )}
      {stomach && (
        <Field>
          <Parameter>Stomach</Parameter>
          <Value>{stomach}</Value>
        </Field>
      )}
      {length && (
        <Field>
          <Parameter>Length</Parameter>
          <Value>{length}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default WaistCoatListItem;
