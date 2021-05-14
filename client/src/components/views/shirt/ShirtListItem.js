import React from 'react';

const ShirtListItem = ({ shirt }) => {
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
  } = shirt;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {back && <p>Back: {back}</p>}
      {chest && <p>Chest: {chest}</p>}
      {length && <p>Length: {length}</p>}
      {roundSleeve && <p>RoundSleeve: {roundSleeve}</p>}
      {sleeveLength && <p>SleeveLength: {sleeveLength}</p>}
      {shortSleeveLength && <p>ShortSleeveLength: {shortSleeveLength}</p>}
      {stomach && <p>Stomach: {stomach}</p>}
      {neck && <p>Neck: {neck}</p>}
      {cuffWrist && <p>CuffWrist: {cuffWrist}</p>}
    </div>
  );
};

export default ShirtListItem;
