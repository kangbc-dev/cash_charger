import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    position: relative;
    overflow: hidden;
    overscroll-behavior: none;
  }
  button {
    background-color: inherit;
    border: none;
    padding: 0;
    overflow: hidden;
    & > svg {
      width: 100%;
      height: 100%;

    }
  }

`;

export default GlobalStyle;
