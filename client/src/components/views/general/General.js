import React from 'react';
import {
  Wrapper,
  Title,
  Field,
  ParameterGeneral,
  ValueGeneral,
} from '../ViewsResources';

const General = ({ contact }) => {
  const { name, phone, email, address, dob, anniversary } = contact;
  return (
    <Wrapper>
      <Title>General Info</Title>
      {name && (
        <Field>
          <ParameterGeneral>Name</ParameterGeneral>
          <ValueGeneral>{name}</ValueGeneral>
        </Field>
      )}
      {phone && (
        <Field>
          <ParameterGeneral>Phone</ParameterGeneral>
          <ValueGeneral>{phone}</ValueGeneral>
        </Field>
      )}
      {email && (
        <Field>
          <ParameterGeneral>Email</ParameterGeneral>
          <ValueGeneral>{email}</ValueGeneral>
        </Field>
      )}
      {address && (
        <Field>
          <ParameterGeneral>Address</ParameterGeneral>
          <ValueGeneral>{address}</ValueGeneral>
        </Field>
      )}
      {dob && (
        <Field>
          <ParameterGeneral>D.O.B</ParameterGeneral>
          <ValueGeneral>{dob}</ValueGeneral>
        </Field>
      )}
      {anniversary && (
        <Field>
          <ParameterGeneral>Anniversary</ParameterGeneral>
          <ValueGeneral>{anniversary}</ValueGeneral>
        </Field>
      )}
    </Wrapper>
  );
};

export default General;
