import React from 'react';

const FMeasurementListItem = ({ femaleMeasurement }) => {
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
  } = femaleMeasurement;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {shoulder && <p>Shoulder: {shoulder}</p>}
      {bust && <p>Bust: {bust}</p>}
      {underBust && <p>UnderBust: {underBust}</p>}
      {shoulderToBust && <p>ShoulderToBust: {shoulderToBust}</p>}
      {stomach && <p>Stomach: {stomach}</p>}
      {neck && <p>Neck: {neck}</p>}
      {sleeveLength && <p>SleeveLength: {sleeveLength}</p>}
      {roundSleeve && <p>RoundSleeve: {roundSleeve}</p>}
      {halfLength && <p>HalfLength: {halfLength}</p>}
      {hip && <p>Hip: {hip}</p>}
      {blouseLengthLong && <p>BlouseLengthLong: {blouseLengthLong}</p>}
      {blouseLengthShort && <p>BlouseLengthShort: {blouseLengthShort}</p>}
      {gownLengthLong && <p>GownLengthLong: {gownLengthLong}</p>}
      {gownLengthShort && <p>GownLengthShort: {gownLengthShort}</p>}
      {dressLengthLong && <p>DressLengthLong: {dressLengthLong}</p>}
      {dressLengthShort && <p>DressLengthShort: {dressLengthShort}</p>}
    </div>
  );
};

export default FMeasurementListItem;
