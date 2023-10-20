import React, { FC } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";

import verseLogo from "../../assets/verse-logo.png";
import ConnectButton from "./ConnectButton";

import ChevronLeft from "../Icons/ChevronLeft";

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  grid-template-areas: "logo connect" "stats stats";
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.25rem 1.25rem 0;

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    padding: 1.25rem 0;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "logo stats connect";
  }
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 2rem;
  width: auto;
  grid-area: logo;
  flex: 0;
`;

const Header: FC = () => {
  const { isConnected } = useAccount();

  return (
    <StyledHeader>
      <LogoWrapper
        href="https://verse.bitcoin.com"
        target="_blank"
        rel="noreferrer"
      >
        <ChevronLeft />
        <Logo src={verseLogo} alt="Logo" />
      </LogoWrapper>
      <h3>Verse Clicker</h3>
      {isConnected ? <ConnectButton /> : <div />}
    </StyledHeader>
  );
};

export default Header;
