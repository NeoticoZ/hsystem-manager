import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --cyan: #23a4ce;

    --gray-500: #80868d;
    --gray-700: #5a5c5e;

    --white: white;
    --white-200: #fcfcfc;

    --red: rgba(210, 43, 43, .8);

    --blue-transparent: rgba(33, 155, 195, 0.1);
    --black-transparent: rgba(0, 0, 0, 0.1);
  }

  body, input, textarea, button {
    font: 1rem 'Roboto', sans-serif;
  }

  body, a {
    color: var(--gray-700);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`