import React from 'react';
import { ListItemWrapper, Field, Parameter, Value } from '../ViewsResources';

const CapListItem = ({ capp }) => {
  const { name, cap } = capp;

  return (
    <ListItemWrapper>
      {name && (
        <Field>
          <Parameter style={{ fontWeight: 'bold' }}>Name</Parameter>
          <Value style={{ fontWeight: 'bold' }}>{name}</Value>
        </Field>
      )}
      {cap && (
        <Field>
          <Parameter>Cap</Parameter>
          <Value>{cap}</Value>
        </Field>
      )}
    </ListItemWrapper>
  );
};

export default CapListItem;
