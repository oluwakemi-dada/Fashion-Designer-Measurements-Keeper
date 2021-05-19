import React from 'react';

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
        placeholder='Sleeve'
        name='sleeve'
        value={sleeve}
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

export default AgbadaForm;
