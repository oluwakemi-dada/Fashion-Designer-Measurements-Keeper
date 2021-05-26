import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

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
