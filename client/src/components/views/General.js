import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

const Field = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const Parameter = styled.span`
  background: #f1f1f1;
  width: 40%;
  padding: 0.5rem 1.5rem;
`;

const Value = styled.span`
  background: #f9f9f9;
  width: 100%;
  padding: 0.5rem 3rem;
`;

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
