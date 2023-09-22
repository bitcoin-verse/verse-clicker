import React, { FC } from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard";
import useGameLoop from "../hooks/useGameLoop";

import background from "../assets/background.png";
import Leaderboard from "../components/Leaderboard";
import { useTrackedState } from "../context/store";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }
`;

const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 16px;
  background-image: url(${background});
  background-attachment: fixed;
`;

const OverlayConnect = styled.div`
  position: absolute;
  background-color: rgba(3, 12, 20, 0.5);
  z-index: 1;
  width: 100%;
  height: 100vh;
`;

const Main: FC = () => {
  useGameLoop();

  const { loading } = useTrackedState();
  const { isConnected, isDisconnected } = useAccount();

  return (
    <>
      <GlobalStyle />

      {loading && (
        <div style={{ color: "black", textAlign: "center", padding: "1rem" }}>
          LOADING...
        </div>
      )}
      {isDisconnected && (
        <OverlayConnect>
          <Web3Button />
        </OverlayConnect>
      )}
      <ContentsWrapper>
        <Header />
        <GameBoard />
        {isConnected && <Leaderboard />}
        <Footer />
      </ContentsWrapper>
    </>
  );
};

export default Main;
