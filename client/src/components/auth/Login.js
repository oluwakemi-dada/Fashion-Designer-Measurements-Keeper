import React, { useState, useContext } from 'react';
import { Wrapper, Title } from '../pages/PageResources';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../alert/Alert';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

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
    console.log('Login submit');
  };

  return (
    <Wrapper>
      <Title>
        Account <span style={{ color: '#0078E7' }}>Login</span>
      </Title>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </Wrapper>
  );
};

export default Login;
