import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';

const Logout = styled.a`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: #000080;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
  }
`;

const ListItem = styled.li`
  @media (max-width: 768px) {
    padding: 0.7rem;
    margin: 1rem 0;
  }
`;

const RightNav = ({ open, setOpen }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { logout, isAuthenticated } = authContext;
  const { clearContacts } = contactContext;

  const onCloseHamburger = () => {
    setOpen(false);
  };

  const onLogout = () => {
    logout();
    clearContacts();
    onCloseHamburger();
  };

  const authLinks = (
    <List open={open}>
      <ListItem>
        <NavLink
          to='/'
          className='navlink'
          activeClassName='selected'
          onClick={onCloseHamburger}
          exact
        >
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink
          to='/create'
          className='navlink'
          activeClassName='selected'
          onClick={onCloseHamburger}
          exact
        >
          Create Contact
        </NavLink>
      </ListItem>
      <ListItem>
        <Logout onClick={onLogout} href='#!' className='navlink'>
          <FaSignOutAlt style={{ marginRight: '.5rem' }} />
          <span>Logout</span>
        </Logout>
      </ListItem>
    </List>
  );

  const guestLinks = (
    <List open={open}>
      <ListItem>
        <NavLink
          to='/register'
          className='navlink'
          activeClassName='selected'
          onClick={onCloseHamburger}
          exact
        >
          Register
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink
          to='/login'
          className='navlink'
          activeClassName='selected'
          onClick={onCloseHamburger}
          exact
        >
          Login
        </NavLink>
      </ListItem>
    </List>
  );

  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};

export default RightNav;
