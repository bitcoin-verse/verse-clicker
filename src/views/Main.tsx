import React, { FC } from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard";
import useGameLoop from "../hooks/useGameLoop";

const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  flex: 1;
  padding: 16px;
`;

const Main: FC = () => {
  useGameLoop();

  return (
    <>
      <GlobalStyle />

      <PageWrapper>
        <Header />
        <GameBoard />
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Main;
