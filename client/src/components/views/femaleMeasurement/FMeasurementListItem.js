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

const FMeasurementListItem = ({ femaleMeasurement }) => {
  const {
    name,
    shoulder,
    bust,
    underBust,
    shoulderToBust,
    stomach,
    neck,
    sleeveLength,
    roundSleeve,
    halfLength,
    hip,
    blouseLengthLong,
    blouseLengthShort,
    gownLengthLong,
    gownLengthShort,
    dressLengthLong,
    dressLengthShort,
  } = femaleMeasurement;

  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {shoulder && (
        <Field>
          <Parameter>Shoulder</Parameter>
          <Value>{shoulder}</Value>
        </Field>
      )}
      {bust && (
        <Field>
          <Parameter>Bust</Parameter>
          <Value>{bust}</Value>
        </Field>
      )}
      {underBust && (
        <Field>
          <Parameter>UnderBust</Parameter>
          <Value>{underBust}</Value>
        </Field>
      )}
      {shoulderToBust && (
        <Field>
          <Parameter>ShoulderToBust</Parameter>
          <Value>{shoulderToBust}</Value>
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
      {sleeveLength && (
        <Field>
          <Parameter>SleeveLength</Parameter>
          <Value>{sleeveLength}</Value>
        </Field>
      )}
      {roundSleeve && (
        <Field>
          <Parameter>RoundSleeve</Parameter>
          <Value>{roundSleeve}</Value>
        </Field>
      )}
      {halfLength && (
        <Field>
          <Parameter>HalfLength</Parameter>
          <Value>{halfLength}</Value>
        </Field>
      )}
      {hip && (
        <Field>
          <Parameter>Hip</Parameter>
          <Value>{hip}</Value>
        </Field>
      )}
      {blouseLengthLong && (
        <Field>
          <Parameter>BlouseLengthLong</Parameter>
          <Value>{blouseLengthLong}</Value>
        </Field>
      )}
      {blouseLengthShort && (
        <Field>
          <Parameter>BlouseLengthShort</Parameter>
          <Value>{blouseLengthShort}</Value>
        </Field>
      )}
      {gownLengthLong && (
        <Field>
          <Parameter>GownLengthLong</Parameter>
          <Value>{gownLengthLong}</Value>
        </Field>
      )}
      {gownLengthShort && (
        <Field>
          <Parameter>GownLengthShort</Parameter>
          <Value>{gownLengthShort}</Value>
        </Field>
      )}
      {dressLengthLong && (
        <Field>
          <Parameter>DressLengthLong</Parameter>
          <Value>{dressLengthLong}</Value>
        </Field>
      )}
      {dressLengthShort && (
        <Field>
          <Parameter>DressLengthShort</Parameter>
          <Value>{dressLengthShort}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default FMeasurementListItem;
