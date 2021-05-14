import React from 'react';

const TrouserListItem = ({ trouser }) => {
  const {
    name,
    waist,
    lap,
    length,
    knee,
    flap,
    hip,
    lowerLimb,
    mouthAnkle,
  } = trouser;
  return (
    <div>
      {name && <p>Name: {name}</p>}
      {waist && <p>Waist: {waist}</p>}
      {lap && <p>Lap: {lap}</p>}
      {length && <p>Length: {length}</p>}
      {knee && <p>Knee: {knee}</p>}
      {flap && <p>Flap: {flap}</p>}
      {hip && <p>Hip: {hip}</p>}
      {lowerLimb && <p>LowerLimb: {lowerLimb}</p>}
      {mouthAnkle && <p>MouthAnkle: {mouthAnkle}</p>}
    </div>
  );
};

export default TrouserListItem;
