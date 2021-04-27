import React from 'react';

const RoyalBrocadeForm = ({ royalBrocadeTopData, setRoyalBrocadeTopData }) => {

  const {
    name,
    back,
    chest,
    length,
    roundSleeve,
    sleeveLength,
    shortSleeveLength,
    stomach,
    neck,
    cuffWrist,
    threeFourSleeve,
    threeFourRoundSleeve,
  } = royalBrocadeTopData;

  const onChange = (e) => {
    setRoyalBrocadeTopData({
      ...royalBrocadeTopData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button>X</button>
      <h2>Royal Brocade Top</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Back'
        name='back'
        value={back}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Chest'
        name='chest'
        value={chest}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Length'
        name='length'
        value={length}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Round Sleeve'
        name='roundSleeve'
        value={roundSleeve}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Sleeve Length'
        name='sleeveLength'
        value={sleeveLength}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Short Sleeve Length'
        name='shortSleeveLength'
        value={shortSleeveLength}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Stomach'
        name='stomach'
        value={stomach}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Neck'
        name='neck'
        value={neck}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Cuff Wrist'
        name='cuffWrist'
        value={cuffWrist}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Three Four Sleeve'
        name='threeFourSleeve'
        value={threeFourSleeve}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Three Four Round Sleeve'
        name='threeFourRoundSleeve'
        value={threeFourRoundSleeve}
        onChange={onChange}
      />
    </div>
  );
};

export default RoyalBrocadeForm;
