import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import {
  Wrapper,
  SubHeadingWrapper,
  SubHeadingTitle,
  Field,
  Label,
  Input,
  styles,
} from './FormResources';

const CapForm = ({ index, capArr, setCapArr }) => {
  const { name, cap } = capArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...capArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'cap') {
      values[i].cap = e.target.value;
    }

    setCapArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = capArr.filter((cap) => capArr.indexOf(cap) !== formIndex);

    setCapArr(newArr);
  };

  return (
    <Wrapper>
      <SubHeadingWrapper>
        <SubHeadingTitle>{`Form ${index + 1}`}</SubHeadingTitle>
        <FaMinusCircle
          style={styles.delteIcon}
          size={25}
          onClick={() => {
            onRemoveForm(index);
          }}
        />
      </SubHeadingWrapper>

      <Field>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          name='name'
          value={name}
          required
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='cap'>Cap</Label>
        <Input
          type='text'
          name='cap'
          value={cap}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default CapForm;
