import React from 'react';
import { Wrapper, Field, Label, Input,} from './FormResources';

const GeneralForm = ({ generalData, setGeneralData }) => {
  const { name, phone, email, address, dob, anniversary } = generalData;

  const onChange = (e) => {
    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <Field>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          required
        />
      </Field>
      <Field>
        <Label htmlFor='Phone'>Phone</Label>
        <Input
          type='text'
          name='phone'
          value={phone}
          onChange={onChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor='Email'>Email</Label>
        <Input type='email' name='email' value={email} onChange={onChange} />
      </Field>

      <Field>
        <Label htmlFor='Address'>Address</Label>
        <Input type='text' name='address' value={address} onChange={onChange} />
      </Field>

      <Field>
        <Label htmlFor='dob'>D.O.B</Label>
        <Input type='text' name='dob' value={dob} onChange={onChange} />
      </Field>

      <Field>
        <Label htmlFor='anniversary'>Anniversary</Label>
        <Input
          type='text'
          name='anniversary'
          value={anniversary}
          onChange={onChange}
        />
      </Field>
    </Wrapper>
  );
};

export default GeneralForm;
