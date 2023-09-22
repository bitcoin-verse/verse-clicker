import React, { FC } from "react";
import { Web3Button } from "@web3modal/react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";
import verseClicker from "../assets/verse-clicker.png";
import verseLogo from "../assets/verse-logo.png";
import { checkIsMobile } from "../helpers/checkDevice";
import Stats from "./Stats";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 1rem;
  align-items: center;
`;

const Logo = styled.img<{ isMobile: boolean }>`
  max-width: ${({ isMobile }) => (isMobile ? "2.5rem" : "13.875rem")};
`;

const ConnectWrapper = styled.div`
  justify-self: flex-end;
`;

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();

  useAccount({
    onConnect: ({ address }) => {
      // console.log("Connected", { address, connector, isReconnected });
      if (!address) return;
      dispatch({ type: "GET_SAVE", payload: address });
    },
    onDisconnect: () => {
      // console.log("Disconnected");
      dispatch({ type: "RESET_GAME" });
    },
  });

  const logo = checkIsMobile() ? verseLogo : verseClicker;

  return (
    <StyledHeader>
      <Logo src={logo} title="Verse Clicker" isMobile={checkIsMobile()} />
      <Stats />
      {isConnected && (
        <ConnectWrapper>
          <Web3Button />
        </ConnectWrapper>
      )}
    </StyledHeader>
  );
};

export default Header;
