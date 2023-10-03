import React, { FC } from "react";
import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";

import verseClicker from "../../assets/verse-clicker.png";
import Stats from "./Stats";
import ConnectButton from "./ConnectButton";

import polygonLogo from "../../assets/polygon.png";
import ethLogo from "../../assets/ethereum.png";
import goerliLogo from "../../assets/goerli.png";

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

  width: auto;
  grid-area: logo;
  flex: 0;
`;

const LOGOS: Record<string, string> = {
  Ethereum: ethLogo,
  Polygon: polygonLogo,
  Goerli: goerliLogo,
};

const Header: FC = () => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <StyledHeader>
      <div
        style={{
          gridArea: "logo",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div>
          <Logo src={verseClicker} alt="Logo" />
        </div>
        {chain?.name && (
          <div style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem" }}>
            <div>
              <img src={LOGOS[chain.name]} height={16} width={16} />
            </div>
            <div>{chain.name} Edition</div>
          </div>
        )}
      </div>

      <Stats />

      {isConnected ? <ConnectButton /> : <div />}
    </StyledHeader>
  );
};

export default Header;
