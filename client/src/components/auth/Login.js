import React, { useState, useContext, useEffect } from 'react';
import { Wrapper, Title, Field, Input, Button } from './AuthResources';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alert from '../layout/Alert';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger', 3000);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <Wrapper>
      <Title>
        Account <span style={{ color: '#0078E7' }}>Login</span>
      </Title>
      <Alert />
      <form onSubmit={onSubmit}>
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
          />
        </Field>
        <Button type='submit'>Login</Button>
      </form>
    </Wrapper>
  );
};

export default Login;
