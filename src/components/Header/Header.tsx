import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTrackedState } from "src/context/store";

import verseIcon from "../../assets/verse-icon.png";
import verseLogo from "../../assets/verse-logo.png";
import ChevronLeft from "../Icons/ChevronLeft";
import ConnectButton from "./ConnectButton";
import GameModeButton from "./GameModeButton";
import {
  ConnectWrapper,
  Icon,
  Logo,
  LogoWrapper,
  StyledHeader,
  Title,
} from "./styled";

const VERSE_BASE_URL =
  process.env.REACT_APP_VERSE_BASE_URL || "https://verse.bitcoin.com/";

const Header: FC = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { isWallet, gameMode } = useTrackedState();

  return (
    <StyledHeader>
      <LogoWrapper
        onClick={() => {
          const search = new URLSearchParams();
          if (isWallet) {
            search.set("origin", "wallet");
          }

          if (pathname === "/") {
            search.set("campaign", gameMode);
            window.location.href = `${VERSE_BASE_URL}/?${search.toString()}`;
          } else {
            search.set("campaign", gameMode);
            navigate(`/?${search.toString()}`);
          }
        }}
      >
        <ChevronLeft />
        <Icon src={verseIcon} alt="Icon" />
        <Logo src={verseLogo} alt="Logo" />
      </LogoWrapper>
      <Title>Verse Clicker</Title>
      <ConnectWrapper>
        <GameModeButton />
        <ConnectButton connectText="Connect" />
      </ConnectWrapper>
    </StyledHeader>
  );
};

export default Header;
