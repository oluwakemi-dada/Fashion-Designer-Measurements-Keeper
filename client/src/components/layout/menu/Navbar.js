import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HamburgerNav from './HamburgerNav';

const NavbarMenu = styled.div`
  background: #0078e7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem;
  width: 100%;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
`;

const Navbar = ({ title }) => {
  return (
    <NavbarMenu>
      <Link to='/' className='logo'>
        {title}
      </Link>
      <HamburgerNav />
    </NavbarMenu>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'LOGO',
};

export default Navbar;
