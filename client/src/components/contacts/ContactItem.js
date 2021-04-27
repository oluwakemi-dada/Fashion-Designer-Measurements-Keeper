import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
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
        <button className='btn btn-primary'>VIEW CONTACT</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
