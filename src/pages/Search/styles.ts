import styled from 'styled-components';

import { BsPencilSquare, BsArrowRight, BsArrowLeft } from 'react-icons/bs'

export const Container = styled.div`
  display: flex;
  
  min-height: 100vh;
  height: auto;
`;

export const SearchContent = styled.div`
  height: 100%;

  margin: 4rem;
  
  h1 {
    margin-bottom: 2rem;
  }

  form {
    padding: 1rem;

    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    gap: 2rem;

    margin-bottom: 4rem;
    
    div {
      display: flex;
      flex-direction: column;

      gap: 0.5rem;

      &.check {
        flex-direction: row;
        align-items: center;
      }
    }

    input {
      height: 2rem;

      padding: 0 0.5rem;
      border-radius: 5px;

      border: 1px solid var(--gray-500);

      &:focus {
        border: 1px solid var(--cyan);
      }
    }
  }

  @media (max-width: 720px) {
    margin: 4rem auto;

    h1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    form {
      flex-direction: column;
      align-items: initial;
    }
  }
`;

export const TableOfIndexers = styled.table`
  width: calc(100vw - 23rem);

  border: 1px solid var(--black-transparent);

  border-collapse: collapse;

  th, td {
    padding: 0.5rem 1rem;
    border: 1px solid var(--black-transparent);
  }

  th {
    text-align: start;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

export const PaginationButtons = styled.div`
  margin-top: 2rem;
  
  display: flex;
  justify-content: space-between;

  button {
    color: var(--gray-700);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: transparent;
    border: none;

    &.nextButton {
      margin-left: auto;
    }
  }
`;

export const EditIcon = styled(BsPencilSquare)`
  width: 24px;
  height: : 24px;
  margin-right: 0.2rem;

  fill: var(--cyan);
`;

export const RightArrowIcon = styled(BsArrowRight)`
  width: 20px;
  height: 20px;

  fill: var(--cyan);
`;

export const LeftArrowIcon = styled(BsArrowLeft)`
  width: 20px;
  height: 20px;

  fill: var(--cyan);
`;
