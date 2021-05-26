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

const SuitTuxForm = ({ index, suitTuxArr, setSuitTuxArr }) => {
  const {
    name,
    back,
    chest,
    length,
    roundSleeve,
    sleeveLength,
    stomach,
    cuffWrist,
    lapel,
  } = suitTuxArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...suitTuxArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'back') {
      values[i].back = e.target.value;
    } else if (e.target.name === 'chest') {
      values[i].chest = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    } else if (e.target.name === 'roundSleeve') {
      values[i].roundSleeve = e.target.value;
    } else if (e.target.name === 'sleeveLength') {
      values[i].sleeveLength = e.target.value;
    } else if (e.target.name === 'stomach') {
      values[i].stomach = e.target.value;
    } else if (e.target.name === 'cuffWrist') {
      values[i].cuffWrist = e.target.value;
    } else if (e.target.name === 'lapel') {
      values[i].lapel = e.target.value;
    }

    setSuitTuxArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = suitTuxArr.filter(
      (suitTux) => suitTuxArr.indexOf(suitTux) !== formIndex
    );

    setSuitTuxArr(newArr);
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
        <Label htmlFor='back'>Back</Label>
        <Input
          type='text'
          name='back'
          value={back}
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
      <Field>
        <Label htmlFor='roundSleeve'>Round Sleeve</Label>
        <Input
          type='text'
          name='roundSleeve'
          value={roundSleeve}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='sleeveLength'>Sleeve Length</Label>
        <Input
          type='text'
          name='sleeveLength'
          value={sleeveLength}
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
        <Label htmlFor='cuffWrist'>Cuff Wrist</Label>
        <Input
          type='text'
          name='cuffWrist'
          value={cuffWrist}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
      <Field>
        <Label htmlFor='lapel'>Lapel</Label>
        <Input
          type='text'
          name='lapel'
          value={lapel}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      </Field>
    </Wrapper>
  );
};

export default SuitTuxForm;
