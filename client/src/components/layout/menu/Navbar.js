import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Logo = styled.h1`
  margin: 0.3rem 0;
  font-weight: 700;
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ title }) => {
  return (
    <NavbarMenu>
      <Logo>{title}</Logo>

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
