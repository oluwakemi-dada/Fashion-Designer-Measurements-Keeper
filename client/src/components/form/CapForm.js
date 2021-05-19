import React from 'react';

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
        placeholder='Cap'
        name='cap'
        value={cap}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default CapForm;
