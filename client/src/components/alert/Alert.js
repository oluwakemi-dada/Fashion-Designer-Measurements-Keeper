import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';
import AlertContext from '../../context/alert/alertContext';

const Wrapper = styled.div`
  background: ${(props) => (props.type === 'success' ? '#D4EDDA' : '#F8D7DA')};
  padding: 1rem 1.3rem;
  margin-bottom: 4rem;
`;

const AlertMsg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
`;

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert && (
      <Wrapper type={alert.type}>
        <AlertMsg type={alert.type}>
          {' '}
          <FaInfoCircle size={19} style={{ marginRight: '.5rem' }} />
          <p>{alert.msg}</p>
        </AlertMsg>
      </Wrapper>
    )
  );
};

export default Alert;
