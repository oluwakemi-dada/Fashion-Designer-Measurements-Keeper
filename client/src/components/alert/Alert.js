import React, { useContext } from 'react';
import styled from 'styled-components';
import AlertContext from '../../context/alert/alertContext';

const Wrapper = styled.div`
  background: ${(props) => (props.type === 'success' ? '#D4EDDA' : '#F8D7DA')};
  padding: 1rem;
  margin-bottom: 4rem;
`;

const AlertMsg = styled.p`
  text-align: center;
  font-weight: 500;
`;

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <Wrapper type={alert.type}>
      <AlertMsg type={alert.type}>{alert.msg}</AlertMsg>
    </Wrapper>
  );
};

export default Alert;
