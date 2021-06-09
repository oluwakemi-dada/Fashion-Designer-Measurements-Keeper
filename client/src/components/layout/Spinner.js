import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0078e7;
`;

const Spinner = () => {
  return (
    <div className='sweet-loading'>
      <BeatLoader color={'#0078e7'} loading={true} css={override} size={10} />
    </div>
  );
};

export default Spinner;
