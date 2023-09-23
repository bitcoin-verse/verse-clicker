import React, { FC } from "react";
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard/GameBoard";
import useGameLoop from "../hooks/useGameLoop";

import background from "../assets/background.png";
import { useTrackedState } from "../context/store";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import Bonuses from "../components/Bonuses";

const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    color: white;
  }
  
  button {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`;

const ContentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(${background});
  background-attachment: fixed;
  min-height: 100dvh;
`;

const OverlayConnect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: 70% 30%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 12, 20, 0.5);
  z-index: 1;
`;

const Main: FC = () => {
  useGameLoop();

  const { loading } = useTrackedState();
  const { status } = useAccount();

  return (
    <>
      <GlobalStyle />
      <Bonuses />
      {(status !== "connected" || loading) && (
        <OverlayConnect>
          <div>
            {status === "connected" ? (
              <h1>Loading...</h1>
            ) : (
              <h1 style={{ margin: "2rem" }}>Connect Wallet to start</h1>
            )}

            {status !== "connected" && <Web3Button />}
          </div>
        </OverlayConnect>
      )}
      <ContentsWrapper>
        <Header />
        <GameBoard />
        <Footer />
      </ContentsWrapper>
    </>
  );
};

export default Main;
