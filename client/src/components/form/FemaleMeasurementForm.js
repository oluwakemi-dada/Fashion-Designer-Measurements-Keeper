import React from 'react';

const FemaleMeasurementForm = ({
  index,
  femaleMeasurementArr,
  setFemaleMeasurementArr,
}) => {
  // Destructure data from the current index
  const {
    name,
    shoulder,
    bust,
    underBust,
    shoulderToBust,
    stomach,
    neck,
    sleeveLength,
    roundSleeve,
    halfLength,
    hip,
    blouseLengthLong,
    blouseLengthShort,
    gownLengthLong,
    gownLengthShort,
    dressLengthLong,
    dressLengthShort,
  } = femaleMeasurementArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...femaleMeasurementArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'shoulder') {
      values[i].shoulder = e.target.value;
    } else if (e.target.name === 'bust') {
      values[i].bust = e.target.value;
    } else if (e.target.name === 'underBust') {
      values[i].underBust = e.target.value;
    } else if (e.target.name === 'shoulderToBust') {
      values[i].shoulderToBust = e.target.value;
    } else if (e.target.name === 'stomach') {
      values[i].stomach = e.target.value;
    } else if (e.target.name === 'neck') {
      values[i].neck = e.target.value;
    } else if (e.target.name === 'sleeveLength') {
      values[i].sleeveLength = e.target.value;
    } else if (e.target.name === 'roundSleeve') {
      values[i].roundSleeve = e.target.value;
    } else if (e.target.name === 'halfLength') {
      values[i].halfLength = e.target.value;
    } else if (e.target.name === 'hip') {
      values[i].hip = e.target.value;
    } else if (e.target.name === 'blouseLengthLong') {
      values[i].blouseLengthLong = e.target.value;
    } else if (e.target.name === 'blouseLengthShort') {
      values[i].blouseLengthShort = e.target.value;
    } else if (e.target.name === 'gownLengthLong') {
      values[i].gownLengthLong = e.target.value;
    } else if (e.target.name === 'gownLengthShort') {
      values[i].gownLengthShort = e.target.value;
    } else if (e.target.name === 'dressLengthLong') {
      values[i].dressLengthLong = e.target.value;
    } else if (e.target.name === 'dressLengthShort') {
      values[i].dressLengthShort = e.target.value;
    }

    setFemaleMeasurementArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = femaleMeasurementArr.filter(
      (femaleMeasurement) =>
        femaleMeasurementArr.indexOf(femaleMeasurement) !== formIndex
    );

    setFemaleMeasurementArr(newArr);
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
        placeholder='Shoulder'
        name='shoulder'
        value={shoulder}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Bust'
        name='bust'
        value={bust}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Under Bust'
        name='underBust'
        value={underBust}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Shoulder To Bust'
        name='shoulderToBust'
        value={shoulderToBust}
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
        placeholder='Neck'
        name='neck'
        value={neck}
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
        placeholder='Round Sleeve'
        name='roundSleeve'
        value={roundSleeve}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Half Length'
        name='halfLength'
        value={halfLength}
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
        placeholder='Blouse Length Long'
        name='blouseLengthLong'
        value={blouseLengthLong}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Blouse Length Short'
        name='blouseLengthShort'
        value={blouseLengthShort}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Gown Length Long'
        name='gownLengthLong'
        value={gownLengthLong}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Gown Length Short'
        name='gownLengthShort'
        value={gownLengthShort}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Dress Length Long'
        name='dressLengthLong'
        value={dressLengthLong}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Dress Length Short'
        name='dressLengthShort'
        value={dressLengthShort}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default FemaleMeasurementForm;
