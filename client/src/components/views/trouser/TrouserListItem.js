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

const TrouserListItem = ({ trouser }) => {
  const { name, waist, lap, length, knee, flap, hip, lowerLimb, mouthAnkle } =
    trouser;
  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {waist && (
        <Field>
          <Parameter>Waist</Parameter>
          <Value>{waist}</Value>
        </Field>
      )}
      {lap && (
        <Field>
          <Parameter>Lap</Parameter>
          <Value>{lap}</Value>
        </Field>
      )}
      {length && (
        <Field>
          <Parameter>Length</Parameter>
          <Value>{length}</Value>
        </Field>
      )}
      {knee && (
        <Field>
          <Parameter>Knee</Parameter>
          <Value>{knee}</Value>
        </Field>
      )}
      {flap && (
        <Field>
          <Parameter>Flap</Parameter>
          <Value>{flap}</Value>
        </Field>
      )}
      {hip && (
        <Field>
          <Parameter>Hip</Parameter>
          <Value>{hip}</Value>
        </Field>
      )}
      {lowerLimb && (
        <Field>
          <Parameter>LowerLimb</Parameter>
          <Value>{lowerLimb}</Value>
        </Field>
      )}
      {mouthAnkle && (
        <Field>
          <Parameter>MouthAnkle</Parameter>
          <Value>{mouthAnkle}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default TrouserListItem;
