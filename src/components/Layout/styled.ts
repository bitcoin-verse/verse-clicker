import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow','Helvetica', sans-serif;
    letter-spacing: 0em;
  }

  html, body, div {
    color: white;
  }

  button {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`;

export const ContentsWrapper = styled.div<{ $showMoon?: boolean }>`
  position: relative;
  display: grid;
  flex-direction: column;
  grid-template-rows: 5.25rem auto auto 5.25rem;
  box-sizing: border-box;

  background: linear-gradient(
      180deg,
      #020a10 0%,
      #10518d 78.65%,
      #2975bd 93.75%,
      #4c97dd 99.48%
    ),
    linear-gradient(0deg, #030c14, #030c14);
  min-height: 100dvh;
`;
