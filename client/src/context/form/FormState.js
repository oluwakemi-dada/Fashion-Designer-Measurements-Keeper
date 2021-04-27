import React, { useReducer } from 'react';
import FormContext from './formContext';
import formReducer from './formReducer';
import {} from '../types';

const FormState = (props) => {
  const initialState = {
    form: {
      name: '',
      phone: '',
      email: '',
      address: '',
      dob: '',
      anniversary: '',
      royalBrocadeTop: [
        {
          name: '',
          back: '',
          chest: '',
          length: '',
          roundSleeve: '',
          sleeveLength: '',
          shortSleeveLength: '',
          stomach: '',
          neck: '',
          cuffWrist: '',
          threeFourSleeve: '',
          threeFourRoundSleeve: '',
        },
      ],
      trouser: [],
      agbada: [],
      cap: [],
      suitTux: [],
      waistCoat: [],
      shirt: [],
      femaleMeasurements: [],
    },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider
      value={{
        formData: state.form,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
