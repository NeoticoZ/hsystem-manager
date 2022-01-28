import styled, { css } from 'styled-components';

import { 
  AiOutlineHome, 
  AiOutlineCodepen, 
  AiOutlineSearch, 
  AiOutlinePlus,
} from 'react-icons/ai';

export const Container = styled.nav`
  width: 15rem;
  height: auto;
  
  border: 1px solid var(--black-transparent);

  background: var(--white-200);

  font-size: 0.8rem;

  > img {
    width: 100%;
    height: auto;
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    height: 2.5rem;
    padding: 0 1rem;

    &:hover {
      background: var(--blue-transparent);
    }

    &.active {
      color: var(--cyan);
    }

    &.home {
      height: 3rem;
    }

    @media (max-width: 720px) {
      justify-content: center;
      height: 3rem;

      span {
        display: none;
      }
    }
  }

  @media (max-width: 720px) {
    width: 5rem;
  }
`;

export const Logo = styled.div`
  padding: 1rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  background: var(--cyan);
  color: var(--white);

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
    padding: 0rem 1rem;

    div {
      display: none;
    }
  }
`;

export const LogoIcon = styled(AiOutlineCodepen)`
  width: 60px;
  height: 60px;

  color: var(--white);
`

export const IndexersSection = styled.div`
  border-top: 1px solid var(--black-transparent);

  > span {
    display: flex;
    align-items: center;

    padding: 0 1rem;

    color: var(--gray-500);

    text-transform: uppercase;
    font-size: 0.6875rem;
    line-height: 2.5rem;
  }

  @media (max-width: 720px) {
    span {
      display: none;
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--cyan);
`;

export const HomeIcon = styled(AiOutlineHome)`
  ${iconCSS};
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${iconCSS};
`;

export const RegisterNewIcon = styled(AiOutlinePlus)`
  ${iconCSS};
`;