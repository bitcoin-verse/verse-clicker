import React, { FC } from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard";
import { useAccount } from "wagmi";

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

const PageContent = styled.section`
  flex: 1;
`;

const Main: FC = () => {
  const { status, address } = useAccount();
  console.log(address);
  return (
    <>
      <GlobalStyle />

      <PageWrapper>
        <Header />
        {status === "connected" ? (
          <PageContent>
            <GameBoard />
          </PageContent>
        ) : (
          <h1>Connect wallet to start</h1>
        )}
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Main;
