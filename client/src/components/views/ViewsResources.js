import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

export const Title = styled.h3`
  background: #e7e4e4;
  padding: 0.8rem 2rem;
  margin-bottom: 3rem;
`;

export const ListItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Field = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const ParameterGeneral = styled.span`
  background: #f1f1f1;
  width: 40%;
  padding: 0.5rem 1.5rem;

  @media (max-width: 500px) {
    width: 60%;
  }
`;

export const Parameter = styled.span`
  background: #f1f1f1;
  width: 40%;
  padding: 0.5rem 1.5rem;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Value = styled.span`
  background: #f9f9f9;
  width: 100%;
  padding: 0.5rem 3rem;
`;
