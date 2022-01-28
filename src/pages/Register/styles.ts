import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;

      input {
        margin-top: 1rem;
        height: 2.5rem;

        padding: 0 0.5rem;
        border-radius: 5px;

        border: 1px solid var(--gray-500);

        &:focus {
          border: 1px solid var(--cyan);
        }

        &::placeholder {
          opacity: 0.4;
        }
      }
    }
  }

  @media (max-width: 720px) {
    margin: 0 2rem;
  }
`;