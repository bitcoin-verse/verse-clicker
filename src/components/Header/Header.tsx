import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

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

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <LogoWrapper onClick={() => navigate(-1)}>
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
