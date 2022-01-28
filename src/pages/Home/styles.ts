import styled from 'styled-components';

import { AiOutlineCheckSquare } from 'react-icons/ai'

export const Container = styled.section`
  display: flex;

  height: 100vh;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  @media (max-width: 720px) {
    justify-content: initial;
    margin: 5rem 0 5rem 3rem;
  }
`;

export const CheckedIcon = styled(AiOutlineCheckSquare)`
  width: 24px;
  height: 24px;

  fill: var(--cyan);
`;