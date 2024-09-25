import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300..800&display=swap');

  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #414649;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, 
  ul {
    list-style: none;
  }
   
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 1em;
    text-align: center;
     
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;
