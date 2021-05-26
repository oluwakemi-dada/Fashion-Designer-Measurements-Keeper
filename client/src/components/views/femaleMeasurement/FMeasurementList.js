import React from 'react';
import FMeasurementListItem from './FMeasurementListItem';
import { Wrapper, Title } from '../ViewsResources';

const FMeasurementList = ({ contact }) => {
  const { femaleMeasurements } = contact;

  return (
    <Wrapper>
      {femaleMeasurements && femaleMeasurements.length !== 0 && (
        <Title>Female Measurements</Title>
      )}
      {femaleMeasurements &&
        femaleMeasurements.length !== 0 &&
        femaleMeasurements.map((femaleMeasurement) => (
          <FMeasurementListItem
            key={femaleMeasurement.id}
            femaleMeasurement={femaleMeasurement}
          />
        ))}
    </Wrapper>
  );
};

export default FMeasurementList;
