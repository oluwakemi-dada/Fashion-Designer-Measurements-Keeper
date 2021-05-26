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

const WaistCoatForm = ({ index, waistCoatArr, setWaistCoatArr }) => {
  const { name, chest, stomach, length } = waistCoatArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...waistCoatArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'chest') {
      values[i].chest = e.target.value;
    } else if (e.target.name === 'stomach') {
      values[i].stomach = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    }

    setWaistCoatArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = waistCoatArr.filter(
      (waistCoat) => waistCoatArr.indexOf(waistCoat) !== formIndex
    );

    setWaistCoatArr(newArr);
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
        <Label htmlFor='chest'>Chest</Label>
        <Input
          type='text'
          name='chest'
          value={chest}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='stomach'>Stomach</Label>
        <Input
          type='text'
          name='stomach'
          value={stomach}
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

export default WaistCoatForm;
