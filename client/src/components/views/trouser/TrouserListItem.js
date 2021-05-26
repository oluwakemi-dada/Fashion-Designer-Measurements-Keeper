import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

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
          <Parameter>Lower Limb</Parameter>
          <Value>{lowerLimb}</Value>
        </Field>
      )}
      {mouthAnkle && (
        <Field>
          <Parameter>Mouth Ankle</Parameter>
          <Value>{mouthAnkle}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default TrouserListItem;
