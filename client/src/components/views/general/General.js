import React from 'react';
import {
  Wrapper,
  Title,
  Field,
  ParameterGeneral,
  Value,
} from '../ViewsResources';

const General = ({ contact }) => {
  const { name, phone, email, address, dob, anniversary } = contact;
  return (
    <Wrapper>
      <Title>General Info</Title>
      {name && (
        <Field>
          <ParameterGeneral>Name</ParameterGeneral>
          <Value>{name}</Value>
        </Field>
      )}
      {phone && (
        <Field>
          <ParameterGeneral>Phone</ParameterGeneral>
          <Value>{phone}</Value>
        </Field>
      )}
      {email && (
        <Field>
          <ParameterGeneral>Email</ParameterGeneral>
          <Value>{email}</Value>
        </Field>
      )}
      {address && (
        <Field>
          <ParameterGeneral>Address</ParameterGeneral>
          <Value>{address}</Value>
        </Field>
      )}
      {dob && (
        <Field>
          <ParameterGeneral>D.O.B</ParameterGeneral>
          <Value>{dob}</Value>
        </Field>
      )}
      {anniversary && (
        <Field>
          <ParameterGeneral>Anniversary</ParameterGeneral>
          <Value>{anniversary}</Value>
        </Field>
      )}
    </Wrapper>
  );
};

export default General;
