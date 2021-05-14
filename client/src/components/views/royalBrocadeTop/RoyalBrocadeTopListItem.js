import React from 'react';

const RoyalBrocadeTopListItem = ({ RBT }) => {
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
  } = RBT;

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
      {threeFourSleeve && <p>ThreeFourSleeve: {threeFourSleeve}</p>}
      {threeFourRoundSleeve && (
        <p>ThreeFourRoundSleeve: {threeFourRoundSleeve}</p>
      )}
    </div>
  );
};

export default RoyalBrocadeTopListItem;
