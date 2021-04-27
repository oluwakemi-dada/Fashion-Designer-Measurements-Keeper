import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ayomide Peters',
        phone: '111-222-3333',
        email: 'peters@gmail.com',
        address: 'Maryland, Lagos, Nigeria',
        dob: '11/29/79',
        anniversary: '6th March',
        royalBrocadeTop: [
          {
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
      },
      {
        id: 2,
        name: 'Oyeleke John',
        phone: '333-444-5555',
        address: 'Maitama, Abuja, Nigeria',
        dob: '10/9/97',
        anniversary: '12th May',
        royalBrocadeTop: [
          {
            name: 'Mr John',
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
        trouser: [
          {
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
      },
      {
        id: 3,
        name: 'EgbeJale Joy',
        phone: '000-333-4444',
        email: 'Joy@gmail.com',
        address: 'Ikoyi, Lagos, Nigeria',
        dob: '21/08/94',
        femaleMeasurements: [
          {
            name: 'Miss Joy',
            shoulder: '16',
            bust: '34',
            underBust: '28',
            shoulderToBust: '10',
            stomach: '29',
            neck: '15',
            sleeveLength: '8/12/23',
            roundSleeve: '11/9/7',
            halfLength: '14/15',
            hip: '40',
            blouseLengthLong: '29/22',
            blouseLengthShort: '29/22',
            gownLengthLong: '59/40',
            gownLengthShort: '59/40',
            dresslengthlong: '10',
            dresslengthshort: '10',
          },
        ],
        trouser: [
          {
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
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
