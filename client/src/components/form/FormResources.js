import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

export const SubHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 0.7rem 2rem;
  margin-bottom: 1.5rem;
`;

export const SubHeadingTitle = styled.div`
  font-weight: 600;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
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

export const Input = styled.input`
  background: #f9f9f9;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: none;
`;

export const styles = {
  delteIcon: {
    color: '#dc3545',
    cursor: 'pointer',
  },
};
