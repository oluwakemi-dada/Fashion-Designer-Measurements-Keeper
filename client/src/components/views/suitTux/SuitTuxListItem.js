import React from 'react';

const SuitTuxListItem = ({ suitTux }) => {
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
  } = suitTux;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {back && <p>Back: {back}</p>}
      {chest && <p>Chest: {chest}</p>}
      {length && <p>Length: {length}</p>}
      {roundSleeve && <p>RoundSleeve: {roundSleeve}</p>}
      {sleeveLength && <p>SleeveLength: {sleeveLength}</p>}
      {stomach && <p>Stomach: {stomach}</p>}
      {cuffWrist && <p>CuffWrist: {cuffWrist}</p>}
      {lapel && <p>Lapel: {lapel}</p>}
    </div>
  );
};

export default SuitTuxListItem;
