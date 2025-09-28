import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --color-primary: #242424;
    --color-secondary: #6b6b6b;
    --color-border: #f2f2f2;
}

body {
  margin: 0;
  font-family: "Sohne", Helvetica, sans-serif;
}

h2, h3{
    color: var(--color-primary);
    font-weight: 500;
}

`;

export default GlobalStyles;
