import React from 'react';
import styled from 'styled-components';
import FMeasurementListItem from './FMeasurementListItem';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

const Title = styled.h3`
  background: #f1f1f1;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

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
