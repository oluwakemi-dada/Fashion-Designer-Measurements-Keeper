import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: #f6f6f6;
  box-shadow: 0.5px 1px 3px rgba(0, 0, 0, 0.25);
  margin: 1rem 0;
  padding: 3rem;
  width: 50%;

  @media (max-width: 1024px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    padding: 2rem;
    margin: 1rem 0;
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    width: 95%;
  }
`;

const ContactName = styled.h3`
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    margin-bottom: 1.6rem;
  }
`;

const ListItemIcon = styled.i`
  margin-right: 1.4rem;
  font-size: 1.8rem;

  @media (max-width: 700px) {
    margin-right: 0.7rem;
    font-size: 1.6rem;
  }
`;

const Button = styled.div`
  display: inline-block;
  background: #0078e7;
  height: 4rem;
  width: 11rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  &:hover {
    background: #0370d6;
  }
`;

const styles = {
  link: {
    color: '#fff',
    height: '4rem',
    width: '11rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const ContactItem = ({ contact }) => {
  const { id, name, email, phone } = contact;

  return (
    <Card>
      <ContactName>{name}</ContactName>
      <ul>
        {email && (
          <ListItem>
            <ListItemIcon className='fas fa-envelope-open' />
            {email}
          </ListItem>
        )}
        <ListItem>
          <ListItemIcon className='fas fa-phone' /> {phone}
        </ListItem>
      </ul>
      <Button>
        <Link to={`/contacts/${id}`} style={styles.link}>
          View Contact
        </Link>
      </Button>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
