import React from 'react';

const TrouserForm = ({ index, trouserArr, setTrouserArr }) => {
  const { name, waist, lap, length, knee, flap, hip, lowerLimb, mouthAnkle } =
    trouserArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...trouserArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'waist') {
      values[i].waist = e.target.value;
    } else if (e.target.name === 'lap') {
      values[i].lap = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    } else if (e.target.name === 'knee') {
      values[i].knee = e.target.value;
    } else if (e.target.name === 'flap') {
      values[i].flap = e.target.value;
    } else if (e.target.name === 'hip') {
      values[i].hip = e.target.value;
    } else if (e.target.name === 'lowerLimb') {
      values[i].lowerLimb = e.target.value;
    } else if (e.target.name === 'mouthAnkle') {
      values[i].mouthAnkle = e.target.value;
    }

    setTrouserArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = trouserArr.filter(
      (trouser) => trouserArr.indexOf(trouser) !== formIndex
    );

    setTrouserArr(newArr);
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
        placeholder='Waist'
        name='waist'
        value={waist}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Lap'
        name='lap'
        value={lap}
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
        placeholder='Knee'
        name='knee'
        value={knee}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Flap'
        name='flap'
        value={flap}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Hip'
        name='hip'
        value={hip}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Lower Limb'
        name='lowerLimb'
        value={lowerLimb}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Mouth Ankle'
        name='mouthAnkle'
        value={mouthAnkle}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default TrouserForm;
