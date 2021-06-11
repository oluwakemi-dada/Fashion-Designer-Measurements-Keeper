import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 30%;

  @media (max-width: 1024px) {
    padding: 1rem 17%;
  }

  @media (max-width: 768px) {
    padding: 1rem 16%;
  }

  @media (max-width: 650px) {
    padding: 1rem 12%;
  }

  @media (max-width: 450px) {
    padding: 1rem 7%;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 0.3rem;
`;

export const Button = styled.button`
  background: #0078e7;
  color: #fff;
  height: 4rem;
  width: 100%;
  margin-top: 0.5rem;
  border: none;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  &:hover {
    background: #0370d6;
  }
`;
