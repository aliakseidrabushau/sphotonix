import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --system-ui: Arial, system-ui, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--system-ui);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
    overscroll-behavior: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  html, body {
    background-image:
      radial-gradient(
        circle at 35% 75%,
        #3b0f0f 0%,
        #130404 40%,
        #000000 100%
      ),
      linear-gradient(
        135deg,
        #221f21 0%,
        #130404 50%,
        #000000 100%
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    height: calc(var(--vh,1svh) * 100);
    color: #fff;
    user-select: none;

    > * {
      width: 100%;
      height: 100%;
    }
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="textarea"],
  input[type="radio"],
  textarea,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="radio"] {
    display: none;
  }

  a, input, button {
    font-family: var(--system-ui);
  }
  
  .scrollable {
    overflow-x: auto;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
  }
`
