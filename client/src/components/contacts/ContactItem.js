import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { setCurrent } = contactContext;

  const { id, name, email, phone } = contact;

  return (
    <div className='card bg-light-2'>
      <h3>{name}</h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open' />
            {email}
          </li>
        )}
        <li>
          <i className='fas fa-phone' /> {phone}
        </li>
      </ul>
      <p>
        <Link to={`/contacts/${id}`}>View Contact</Link>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
