import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

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
          <Parameter>Under Bust</Parameter>
          <Value>{underBust}</Value>
        </Field>
      )}
      {shoulderToBust && (
        <Field>
          <Parameter>Shoulder To Bust</Parameter>
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
          <Parameter>Sleeve Length</Parameter>
          <Value>{sleeveLength}</Value>
        </Field>
      )}
      {roundSleeve && (
        <Field>
          <Parameter>Round Sleeve</Parameter>
          <Value>{roundSleeve}</Value>
        </Field>
      )}
      {halfLength && (
        <Field>
          <Parameter>Half Length</Parameter>
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
          <Parameter>Blouse Length (Long)</Parameter>
          <Value>{blouseLengthLong}</Value>
        </Field>
      )}
      {blouseLengthShort && (
        <Field>
          <Parameter>Blouse Length (Short)</Parameter>
          <Value>{blouseLengthShort}</Value>
        </Field>
      )}
      {gownLengthLong && (
        <Field>
          <Parameter>Gown Length (Long)</Parameter>
          <Value>{gownLengthLong}</Value>
        </Field>
      )}
      {gownLengthShort && (
        <Field>
          <Parameter>Gown Length (Short)</Parameter>
          <Value>{gownLengthShort}</Value>
        </Field>
      )}
      {dressLengthLong && (
        <Field>
          <Parameter>Dress Length (Long)</Parameter>
          <Value>{dressLengthLong}</Value>
        </Field>
      )}
      {dressLengthShort && (
        <Field>
          <Parameter>Dress Length (Short)</Parameter>
          <Value>{dressLengthShort}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default FMeasurementListItem;
