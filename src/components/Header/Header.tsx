import React, { FC } from "react";

import verseIcon from "../../assets/verse-icon.png";
import verseLogo from "../../assets/verse-logo.png";
import { useTrackedState } from "../../context/store";
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

const Header: FC = () => {
  const { gameMode } = useTrackedState();

  return (
    <StyledHeader>
      <LogoWrapper href="https://verse.bitcoin.com">
        <ChevronLeft />
        <Icon src={verseIcon} alt="Icon" />
        <Logo src={verseLogo} alt="Logo" />
      </LogoWrapper>
      <Title>Verse {gameMode === "Christmas" ? "Clickmas" : "Clicker"}</Title>
      <ConnectWrapper>
        <GameModeButton />
        <ConnectButton />
      </ConnectWrapper>
    </StyledHeader>
  );
};

export default Header;
