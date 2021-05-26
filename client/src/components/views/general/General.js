import React from 'react';
import { Wrapper, Title, Field, Parameter, Value } from '../ViewsResources';

const General = ({ contact }) => {
  const { name, phone, email, address, dob, anniversary } = contact;
  return (
    <Wrapper>
      <Title>General Info</Title>
      {name && (
        <Field>
          <Parameter>Name</Parameter>
          <Value>{name}</Value>
        </Field>
      )}
      {phone && (
        <Field>
          <Parameter>Phone</Parameter>
          <Value>{phone}</Value>
        </Field>
      )}
      {email && (
        <Field>
          <Parameter>Email</Parameter>
          <Value>{email}</Value>
        </Field>
      )}
      {address && (
        <Field>
          <Parameter>Address</Parameter>
          <Value>{address}</Value>
        </Field>
      )}
      {dob && (
        <Field>
          <Parameter>D.O.B</Parameter>
          <Value>{dob}</Value>
        </Field>
      )}
      {anniversary && (
        <Field>
          <Parameter>Anniversary</Parameter>
          <Value>{anniversary}</Value>
        </Field>
      )}
    </Wrapper>
  );
};

export default General;
