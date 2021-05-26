import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

const SuitTuxListItem = ({ suitTux }) => {
  const {
    name,
    back,
    chest,
    length,
    roundSleeve,
    sleeveLength,
    stomach,
    cuffWrist,
    lapel,
  } = suitTux;

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
      {stomach && (
        <Field>
          <Parameter>Stomach</Parameter>
          <Value>{stomach}</Value>
        </Field>
      )}
      {cuffWrist && (
        <Field>
          <Parameter>Cuff Wrist</Parameter>
          <Value>{cuffWrist}</Value>
        </Field>
      )}
      {lapel && (
        <Field>
          <Parameter>Lapel</Parameter>
          <Value>{lapel}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default SuitTuxListItem;
