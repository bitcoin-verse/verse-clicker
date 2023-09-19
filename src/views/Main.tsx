import React, { FC } from "react";
import Header from "../components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

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
  return (
    <>
      <GlobalStyle />

      <PageWrapper>
        <Header />
        <PageContent>This is where the game goes</PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Main;
