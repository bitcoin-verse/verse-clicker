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

export const ContentsWrapper = styled.div<{
  $showMoon?: boolean;
  $background?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  background: ${({ $background }) => $background};
  min-height: 100%;
  min-height: 100vh;
  min-height: 100svh;
`;
