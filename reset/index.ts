import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  :root {
    --color-primary-normal: '#fff';
    --color-primary-medium: '#fff';
    --color-gray-light: '#fff';
    --color-gray-medium: '#fff';
    --color-gray-dark: '#fff';
    --color-cancel-light: '#fff';
  }
  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::-webkit-input-placeholder, ::-moz-placeholder, :-ms-input-placeholder {
    color: inherit;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  :-webkit-autofill, :-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
  }
  ::-moz-selection {
    background-color: var(--color-primary-normal);
    text-shadow: 2px 2px var(--color-primary-medium);
    color: var(--color-gray-light);
  }
  ::selection {
    background-color: var(--color-primary-normal);
    text-shadow: 2px 2px var(--color-primary-medium);
    color: var(--color-gray-light);
  }
  ::-webkit-scrollbar{
    width: 16px;
    border-radius: 4px;
    background-color: var(--color-gray-light);
  }
  ::-webkit-scrollbar-button {
    background-color: var(--color-gray-dark)3;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    &:hover {
      background-color: var(--color-gray-dark)6;
    }
    &:single-button:vertical:decrement {
      background-image:
        linear-gradient(-45deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(45deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(0deg, var(--color-cancel-light) 35%, transparent 35%);
    }
    &:single-button:vertical:increment {
      background-image:
        linear-gradient(45deg, var(--color-cancel-light) 40%, transparent 40%),
        linear-gradient(-45deg, var(--color-cancel-light) 40%, transparent 40%),
        linear-gradient(180deg, var(--color-cancel-light) 35%, transparent 35%);
    }
    &:single-button:horizontal:decrement {
      background-image:
        linear-gradient(-45deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(-135deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(-90deg, var(--color-cancel-light) 35%, transparent 35%);
    }
    &:single-button:horizontal:increment {
      background-image:
        linear-gradient(45deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(135deg, transparent 60%, var(--color-cancel-light) 60%),
        linear-gradient(90deg, var(--color-cancel-light) 35%, transparent 35%);
    }
  }

  ::-webkit-scrollbar-thumb{
    border: 4px solid transparent;
    box-shadow: 0 0 20px 20px var(--color-gray-dark)2 inset;
    border-radius: 8px;
    &:hover {
      box-shadow: 0 0 20px 20px var(--color-gray-dark)6 inset;
    }
  }

  html {
    font-size: 10px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--color-gray-light);
    color: var(--color-gray-medium);
  }
  h1, h2, h3, h4, h5, h6, th {
    font-size: inherit;
    font-weight: inherit;
  }
  cite, var, address, dfn {
    font-style: inherit;
  }
  body, pre, form, input, textarea, keygen, select, button, h1, h2, h3, h4, h5, h6, p, hr, blockquote, ol, ul, dl, dd, figure, fieldset {
    margin: 0;
  }
  ol,
  fieldset,
  legend,
  input,
  button,
  textarea {
    padding: 0;
    font-family: inherit;
  }
  ul {
    padding-left: 0;
  }
  ol, ul, li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  textarea{
    resize: none;
    overflow-y: auto;
  }
  iframe{
    border-style: none;
  }
  fieldset, hr, button, keygen, img{
    border-style: none;
    outline-style: none;
    font-family: inherit;
    font-size: inherit;
  }
  [type=button], [type=reset], [type=submit], [type=file], [type=image], button{
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  [disabled]{
    cursor: not-allowed;
  }
`;

export default Reset;
