import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from './PageResources';

const customStyles = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#000',
  display: 'block',
  textAlign: 'center',
};

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>Page not found</Title>
      <Link to='/' style={customStyles}>
        Return home
      </Link>
    </Wrapper>
  );
};

export default NotFoundPage;
