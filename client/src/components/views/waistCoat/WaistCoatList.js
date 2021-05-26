import React from 'react';
import WaistCoatListItem from './WaistCoatListItem';
import { Wrapper, Title } from '../ViewsResources';

const WaistCoatList = ({ contact }) => {
  const { waistCoats } = contact;
  return (
    <Wrapper>
      {waistCoats && waistCoats.length !== 0 && <Title>Waist Coat</Title>}
      {waistCoats &&
        waistCoats.length !== 0 &&
        waistCoats.map((waistCoat) => (
          <WaistCoatListItem key={waistCoat.id} waistCoat={waistCoat} />
        ))}
    </Wrapper>
  );
};

export default WaistCoatList;
