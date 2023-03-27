// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #008B8A;
    --secondary: #595959;
    --white: #ffffff;
    --black: #000000;
    --grey: #707070;
    --darkgrey: #b9bcc0;
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  /* header styles */
  .header-container {
    background-color: var(--darkgrey);
    padding: 14px;
  }

  .header-step-label {
    text-align: center;
    margin-bottom: 30px;
  }

  .header-steps-container {
    display: flex;
    justify-content: center;
  }

  .header-step-item {
    width: 80px;
    height: 4px;
    border-radius: 2px;
    margin-left: 5px;
    background-color: var(--primary);
  }


  /* content styles */
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 960px;
    min-height: 350px;
    margin: 80px auto;
    padding: 55px;
    border-radius: 16px;
    text-align: center;
    background-color: var(--white);
  }

  /* header styles */
  .header-h1 {}

  .header-h2 {}

  .header-h3 {}

  .header-h4 {}

  .header-h5 {}

  .header-h3 {}

  /* text styles */
  .text-container {}

  /* input styles */
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .input-label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .input-field {
    padding: 15px;
    font-size: 16px;
    width: 100%;
    border: 1px solid var(--darkgrey);
    border-radius: 4px;
  }

  .input-helper-text {
    font-size: 11px;
    margin-top: 6px;
    color: var(--grey);
  }

  .button {
    padding: 10px 40px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    border: none;

  }

  .button-next {
    font-weight: bold;
    color: var(--white);
    background-color: var(--primary);
  }
  .button-back {
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--primary);
  }
`;

export default GlobalStyle;
