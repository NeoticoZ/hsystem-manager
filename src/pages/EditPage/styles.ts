import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  height: 100vh;
`;

export const EditPageContent = styled.div`
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

      &.buttons {
        flex-direction: row;

        button {
          &.removeButton {
            flex-direction: row;
      
            margin-left: auto;
            margin-right: 1rem;
            padding: 0 1rem;

            height: 2rem;
            width: 6rem;

            background: var(--red);
            color: var(--white);

            border-radius: 5px;
            border: none;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    margin: 0 2rem;
  }
`;