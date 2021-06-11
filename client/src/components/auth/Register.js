import React, { useState, useContext, useEffect } from 'react';
import { Wrapper, Title, Field, Input, Button } from './AuthResources';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alert from '../layout/Alert';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger', 3000);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger', 3000);
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Wrapper>
      <Title>
        Account <span style={{ color: '#0078E7' }}>Register</span>
      </Title>
      <Alert />
      <form onSubmit={onSubmit}>
        <Field>
          <label htmlFor='name'>Name</label>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </Field>
        <Field>
          <label htmlFor='email'>Email Address</label>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </Field>
        <Field>
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </Field>
        <Field>
          <label htmlFor='password2'>Confirm Password</label>
          <Input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </Field>
        <Button type='submit'>Register</Button>
      </form>
    </Wrapper>
  );
};

export default Register;
