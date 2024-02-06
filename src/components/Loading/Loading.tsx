import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { FC, useEffect } from "react";
import { useTheme } from "styled-components";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";

import connectWallet from "../../assets/connect-wallet.png";
import { useTrackedState } from "../../context/store";
import { Button } from "../Button";
import { H1 } from "../H1";
import { H4 } from "../H4";
import Spinner from "../Icons/Spinner";
import { Label } from "../Label";
import Modal, { useModal } from "../Modal";
import { Title } from "../Title";
// import { Link } from "../Link";
import {
  ConnectWalletImage,
  ConnectionWrapper,
  ContentsWrapper,
  ModalContent,
  MoonImage,
  Wrapper,
} from "./styled";

const Loading: FC = () => {
  const { status } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { halfMoon } = useTheme();
  const { modalRef, showModal, close } = useModal();
  const { error, isWallet } = useTrackedState();

  useEffect(() => {
    if (status === "connected") {
      showModal();
    }
    return () => {
      close();
    };
  }, [status]);

  return (
    <>
      <Wrapper>
        <ContentsWrapper>
          <H1>VERSE CLICKER</H1>
          <H4 $secondary>
            Click for Verse points, climb the leaderboard! Join the Verse
            community and experience a world of endless clicking fun.
          </H4>
          {/* <Link href="https://boo">Learn More</Link> */}
        </ContentsWrapper>
        <ConnectionWrapper>
          <ConnectWalletImage src={connectWallet} alt="Connect Wallet" />

          <Title>Please connect your wallet to access Verse Clicker</Title>
          <div>
            <Button
              $size="small"
              onClick={() => {
                if (isWallet) {
                  open();
                } else {
                  open({ view: "Networks" });
                }
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </ConnectionWrapper>
      </Wrapper>
      <MoonImage src={halfMoon} alt="Verse Moon" />

      <Modal modalRef={modalRef}>
        <ModalContent>
          <Spinner />
          <Title>Loading...</Title>
          {chain?.unsupported && (
            <>
              <Label $color="warning">Unsupported network</Label>
              {chains.map(({ name, id }) => (
                <Button
                  key={id}
                  $size="small"
                  $design="secondary"
                  onClick={() => {
                    if (switchNetwork) switchNetwork(id);
                  }}
                >
                  Switch to {name}
                </Button>
              ))}
            </>
          )}
          {error && (
            <>
              <Label $color="warning">{error}</Label>
              <Button
                $size="small"
                $design="secondary"
                onClick={() => {
                  disconnect();
                  close();
                }}
              >
                Close
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loading;
