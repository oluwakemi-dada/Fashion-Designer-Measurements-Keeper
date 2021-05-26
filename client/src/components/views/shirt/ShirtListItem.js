import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

const ShirtListItem = ({ shirt }) => {
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
  } = shirt;

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
          <Parameter>Round Sleeve</Parameter>
          <Value>{roundSleeve}</Value>
        </Field>
      )}
      {sleeveLength && (
        <Field>
          <Parameter>Sleeve Length</Parameter>
          <Value>{sleeveLength}</Value>
        </Field>
      )}
      {shortSleeveLength && (
        <Field>
          <Parameter>Short Sleeve Length</Parameter>
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
          <Parameter>Cuff Wrist</Parameter>
          <Value>{cuffWrist}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default ShirtListItem;
