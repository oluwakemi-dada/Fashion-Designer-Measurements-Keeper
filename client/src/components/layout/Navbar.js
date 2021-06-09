import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Logout = styled.a`
  display: flex;
  align-items: center;
`;

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts()
  };

  const authLinks = (
    <Fragment>
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
      <li>
        <Logout onClick={onLogout} href='#!' className='navlink'>
          <FaSignOutAlt style={{ marginRight: '.5rem' }} />
          <span>Logout</span>
        </Logout>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <NavLink
          to='/register'
          className='navlink'
          activeClassName='selected'
          exact
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/login'
          className='navlink'
          activeClassName='selected'
          exact
        >
          Login
        </NavLink>
      </li>
    </Fragment>
  );
  return (
    <NavbarMenu>
      <Logo>{title}</Logo>
      <List>{isAuthenticated ? authLinks : guestLinks}</List>
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
