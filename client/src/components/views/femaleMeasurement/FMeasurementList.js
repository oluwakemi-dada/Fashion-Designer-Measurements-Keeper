import React from 'react';
import FMeasurementListItem from './FMeasurementListItem';

const FMeasurementList = ({ contact }) => {
  const { femaleMeasurements } = contact;

  return (
    <div>
      {femaleMeasurements && femaleMeasurements.length !== 0 && (
        <h3>Female Measurements</h3>
      )}
      {femaleMeasurements &&
        femaleMeasurements.length !== 0 &&
        femaleMeasurements.map((femaleMeasurement) => (
          <FMeasurementListItem
            key={femaleMeasurement.id}
            femaleMeasurement={femaleMeasurement}
          />
        ))}
    </div>
  );
};

export default FMeasurementList;
