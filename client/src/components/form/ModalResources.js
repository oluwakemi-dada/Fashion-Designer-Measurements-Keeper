import styled from 'styled-components';

export const ModalHeading = styled.h3`
  margin-bottom: 2.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 5rem;
  height: 3rem;
  background: #fff;
  color: #000;
  box-shadow: 0 0 0.2rem #999;

  &:hover {
    background: #000;
    color: #fff;
    transition: background 0.3s;
  }
`;
