import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { FC, useEffect, useState } from "react";
import { useChainId } from "wagmi";

import verseIcon from "../../assets/verse-icon.png";
import verseLogo from "../../assets/verse-logo.png";
import { useTrackedState } from "../../context/store";
import Debug from "../Debug";
import ChevronLeft from "../Icons/ChevronLeft";
import Modal, { useModal } from "../Modal";
import ConnectButton from "./ConnectButton";
import { Icon, Logo, LogoWrapper, StyledHeader, Title } from "./styled";

const Header: FC = () => {
  const chainId = useChainId();
  const { close } = useWeb3Modal();
  const { gameMode } = useTrackedState();
  const [count, setCount] = useState(0);

  const { modalRef, showModal, close: closeModal } = useModal();
  useEffect(() => {
    close();
  }, [chainId]);

  useEffect(() => {
    if (count === 5) {
      showModal();
      setCount(0);
    }
  }, [count]);

  return (
    <StyledHeader>
      <LogoWrapper href="https://verse.bitcoin.com">
        <ChevronLeft />
        <Icon src={verseIcon} alt="Icon" />
        <Logo src={verseLogo} alt="Logo" />
      </LogoWrapper>
      <Title
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Verse {gameMode === "Christmas" ? "Clickmas" : "Clicker"}
      </Title>
      <ConnectButton />
      <Modal modalRef={modalRef} title="Debug Modal">
        <Debug closeModal={closeModal} />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
