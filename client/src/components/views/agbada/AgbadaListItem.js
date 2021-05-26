import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

const AgbadaListItem = ({ agbada }) => {
  const { name, sleeve, length } = agbada;
  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {sleeve && (
        <Field>
          <Parameter>Sleeve</Parameter>
          <Value>{sleeve}</Value>
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

export default AgbadaListItem;
