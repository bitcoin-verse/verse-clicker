import React, { FC } from "react";
import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";

import verseClicker from "../../assets/verse-clicker.png";
import Stats from "./Stats";
import ConnectButton from "./ConnectButton";

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  grid-template-areas: "logo connect" "stats stats";
  align-items: center;
  max-width: 80rem;
  margin: auto;
  padding: 1.25rem 1.25rem 0;

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    padding: 1.25rem 0;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "logo stats connect";
  }
`;

const Logo = styled.img`
  height: 2rem;
  grid-area: logo;
`;

const Header: FC = () => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <StyledHeader>
      <div>
        <Logo src={verseClicker} alt="Logo" />
        <div>{chain?.name} Edition</div>
      </div>

      <Stats />

      {isConnected ? <ConnectButton /> : <div />}
    </StyledHeader>
  );
};

export default Header;
