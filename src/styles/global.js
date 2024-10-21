import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Open Sans", sans-serif;
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
    text-align: center;
    color: #4D4D4D;
     
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #4D4D4D;
     
    @media (max-width: 767px) {
      font-size: 25px;
    }
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;
