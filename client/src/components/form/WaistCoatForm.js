import React from 'react';

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
        placeholder='Chest'
        name='chest'
        value={chest}
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
        placeholder='Length'
        name='length'
        value={length}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default WaistCoatForm;
