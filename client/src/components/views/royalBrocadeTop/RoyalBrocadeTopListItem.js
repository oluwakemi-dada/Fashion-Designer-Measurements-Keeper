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

const RoyalBrocadeTopListItem = ({ RBT }) => {
  const {
    name,
    back,
    chest,
    length,
    roundSleeve,
    sleeveLength,
    shortSleeveLength,
    stomach,
    neck,
    cuffWrist,
    threeFourSleeve,
    threeFourRoundSleeve,
  } = RBT;

  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {back && (
        <Field>
          <Parameter>Back</Parameter>
          <Value>{back}</Value>
        </Field>
      )}
      {chest && (
        <Field>
          <Parameter>Chest</Parameter>
          <Value>{chest}</Value>
        </Field>
      )}
      {length && (
        <Field>
          <Parameter>Length</Parameter>
          <Value>{length}</Value>
        </Field>
      )}
      {roundSleeve && (
        <Field>
          <Parameter>RoundSleeve</Parameter>
          <Value>{roundSleeve}</Value>
        </Field>
      )}
      {sleeveLength && (
        <Field>
          <Parameter>SleeveLength</Parameter>
          <Value>{sleeveLength}</Value>
        </Field>
      )}
      {shortSleeveLength && (
        <Field>
          <Parameter>ShortSleeveLength</Parameter>
          <Value>{shortSleeveLength}</Value>
        </Field>
      )}
      {stomach && (
        <Field>
          <Parameter>Stomach</Parameter>
          <Value>{stomach}</Value>
        </Field>
      )}
      {neck && (
        <Field>
          <Parameter>Neck</Parameter>
          <Value>{neck}</Value>
        </Field>
      )}
      {cuffWrist && (
        <Field>
          <Parameter>CuffWrist</Parameter>
          <Value>{cuffWrist}</Value>
        </Field>
      )}
      {threeFourSleeve && (
        <Field>
          <Parameter>ThreeFourSleeve</Parameter>
          <Value>{threeFourSleeve}</Value>
        </Field>
      )}
      {threeFourRoundSleeve && (
        <Field>
          <Parameter>ThreeFourRoundSleeve</Parameter>
          <Value>{threeFourRoundSleeve}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default RoyalBrocadeTopListItem;
