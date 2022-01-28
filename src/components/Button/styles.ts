import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 2rem;
  width: 6rem;

  padding: 0 1rem;

  border: none;

  background: var(--cyan);
  color: var(--white);

  border-radius: 5px;

  &.removeButton {
    margin-right: 1rem;
    background: var(--red);
  }
`;