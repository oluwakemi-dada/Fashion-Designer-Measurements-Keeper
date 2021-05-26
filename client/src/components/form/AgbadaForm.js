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

const AgbadaForm = ({ index, agbadaArr, setAgbadaArr }) => {
  const { name, sleeve, length } = agbadaArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...agbadaArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'sleeve') {
      values[i].sleeve = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    }

    setAgbadaArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = agbadaArr.filter(
      (agbada) => agbadaArr.indexOf(agbada) !== formIndex
    );

    setAgbadaArr(newArr);
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
        <Label htmlFor='sleeve'>Sleeve</Label>
        <Input
          type='text'
          name='sleeve'
          value={sleeve}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='length'>Length</Label>
        <Input
          type='text'
          name='length'
          value={length}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default AgbadaForm;
