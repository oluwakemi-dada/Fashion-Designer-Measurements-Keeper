import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from './PageResources';
import AuthContext from '../../context/auth/authContext';

const customStyles = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#000',
  display: 'block',
  textAlign: 'center',
};

const NotFoundPage = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // Scroll to top
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
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
