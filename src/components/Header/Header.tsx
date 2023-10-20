import React, { FC } from "react";
import ConnectButton from "./ConnectButton";

import { Icon, Logo, LogoWrapper, StyledHeader, Title } from "./styled";

import ChevronLeft from "../Icons/ChevronLeft";
import verseLogo from "../../assets/verse-logo.png";
import verseIcon from "../../assets/verse-icon.png";

const Header: FC = () => {
  return (
    <StyledHeader>
      <LogoWrapper href="https://verse.bitcoin.com">
        <ChevronLeft />
        <Icon src={verseIcon} alt="Icon" />
        <Logo src={verseLogo} alt="Logo" />
      </LogoWrapper>
      <Title>Verse Clicker</Title>
      <ConnectButton />
    </StyledHeader>
  );
};

export default Header;
