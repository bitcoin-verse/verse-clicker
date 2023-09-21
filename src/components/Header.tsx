import React, { FC } from "react";
import { Web3Button } from "@web3modal/react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";
import verseClicker from "../assets/verse-clicker.png";
import verseLogo from "../assets/verse-logo.png";
import { checkIsMobile } from "../helpers/checkDevice";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.img<{ isMobile: boolean }>`
  max-width: ${({ isMobile }) => (isMobile ? "2.5rem" : "13.875rem")};
`;

const Header: FC = () => {
  const dispatch = useDispatch();

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
      <Web3Button balance="hide" />
    </StyledHeader>
  );
};

export default Header;
