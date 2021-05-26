import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarMenu = styled.div`
  background: #0078e7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Logo = styled.h1`
  margin: 0.3rem 0;
  font-weight: 700;
  font-size: 3rem;
  font-family: 'Luckiest Guy', cursive;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Navbar = ({ title }) => {
  return (
    <NavbarMenu>
      <Logo>{title}</Logo>
      <List>
        <li>
          <NavLink to='/' className='navlink' activeClassName='selected' exact>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/create'
            className='navlink'
            activeClassName='selected'
            exact
          >
            Create Contact
          </NavLink>
        </li>
      </List>
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
