import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: uuid(),
        name: 'Ayomide Peters',
        phone: '111-222-3333',
        email: 'peters@gmail.com',
        address: 'Maryland, Lagos, Nigeria',
        dob: '11/29/79',
        anniversary: '6th March',
        royalBrocadeTops: [
          {
            id: uuid(),
            name: 'Mr Peters',
            back: '17.5',
            chest: '40',
            length: '32.5 / 31',
            roundSleeve: '32.5 / 31',
            sleeveLength: '32.5 / 31',
            shortSleeveLength: '32.5 / 31',
            stomach: '32.5 / 31',
            neck: '32.5 / 31',
            cuffWrist: '32.5 / 31',
            threeFourSleeve: '32.5 / 31',
            threeFourRoundSleeve: '32.5 / 31',
          },
        ],
        trousers: [
          {
            id: uuid(),
            name: 'Mr Peters',
            waist: '17.5',
            chest: '40',
            lap: '32.5 / 31',
            length: '32.5 / 31',
            knee: '32.5 / 31',
            flap: '32.5 / 31',
            hip: '32.5 / 31',
            lowerlimb: '32.5 / 31',
            mouthankle: '32.5 / 31',
          },
        ],
        caps: [
          {
            id: uuid(),
            name: 'Mr Peters',
            cap: '12',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Oyeleke John',
        phone: '333-444-5555',
        address: 'Maitama, Abuja, Nigeria',
        dob: '10/9/97',
        anniversary: '12th May',
        agbadas: [
          {
            id: uuid(),
            name: 'Mr Oyeleke',
            sleeve: '13',
            length: '40',
          },
          {
            id: uuid(),
            name: 'Mrs Oyeleke',
            sleeve: '10',
            length: '35',
          },
        ],
        caps: [
          {
            id: uuid(),
            name: 'Mr Oyeleke',
            cap: '26',
          },
        ],
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // Update Contact
  const editContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        editContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
