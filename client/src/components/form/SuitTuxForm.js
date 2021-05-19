import React from 'react';

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
    <div>
      <div>{`Form ${index + 1}`}</div>
      <div
        onClick={() => {
          onRemoveForm(index);
          console.log('clicked');
        }}
      >
        X
      </div>

      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        required
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Back'
        name='back'
        value={back}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Chest'
        name='chest'
        value={chest}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Length'
        name='length'
        value={length}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Round Sleeve'
        name='roundSleeve'
        value={roundSleeve}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Sleeve Length'
        name='sleeveLength'
        value={sleeveLength}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Stomach'
        name='stomach'
        value={stomach}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Cuff Wrist'
        name='cuffWrist'
        value={cuffWrist}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='lapel'
        name='lapel'
        value={lapel}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default SuitTuxForm;
