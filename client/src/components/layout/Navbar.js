import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:hover {
    color: red;
  }
`;

const LinkStyles = {
  color: '#fff',
  padding: '0.5rem',
  margin: '0 0.5rem',
  fontWeight: '500',
};

const Navbar = ({ title }) => {
  return (
    <NavbarMenu>
      <Logo>{title}</Logo>
      <List>
        <li>
          <Link to='/' style={LinkStyles}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/create' style={LinkStyles}>
            Create Contact
          </Link>
        </li>
      </List>
    </NavbarMenu>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'VISION',
};

export default Navbar;
