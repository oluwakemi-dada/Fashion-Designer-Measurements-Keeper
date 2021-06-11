import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 10%;

  @media (max-width: 1024px) {
    padding: 1rem 7%;
  }

  @media (max-width: 768px) {
    padding: 1rem 6%;
  }

  @media (max-width: 650px) {
    padding: 1rem 4%;
  }

  @media (max-width: 450px) {
    padding: 1rem 0%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
