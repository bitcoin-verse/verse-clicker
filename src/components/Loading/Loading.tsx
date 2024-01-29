import React, { FC, useEffect } from "react";
import { useTheme } from "styled-components";
import {
  useAccount,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSwitchNetwork,
} from "wagmi";

import connectWallet from "../../assets/connect-wallet.png";
import { useDispatch, useTrackedState } from "../../context/store";
import { Button } from "../Button";
import { H1 } from "../H1";
import { H4 } from "../H4";
import ConnectButton from "../Header/ConnectButton";
import Spinner from "../Icons/Spinner";
import { Label } from "../Label";
import Modal, { useModal } from "../Modal";
import { Title } from "../Title";
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
  const { halfMoon } = useTheme();
  const dispatch = useDispatch();
  const { modalRef, showModal, close } = useModal();
  const { error, settings, isWallet } = useTrackedState();
  const { data, signMessage } = useSignMessage({
    message: `I approve this device:  ${settings.sign?.uuid}`,
  });

  useEffect(() => {
    if (status === "connected") {
      showModal();
    }
    return () => {
      close();
    };
  }, [status]);

  useEffect(() => {
    if (!data) return;
    dispatch({ type: "SET_SIGN_SIGNATURE", payload: data });
  }, [data]);

  return (
    <>
      <Wrapper>
        <ContentsWrapper>
          <H1>VERSE CLICKER</H1>
          <H4 $secondary>
            Click for Verse points, climb the leaderboard! Join the Verse
            community and experience a world of endless clicking fun.
          </H4>
        </ContentsWrapper>
        <ConnectionWrapper>
          <ConnectWalletImage src={connectWallet} alt="Connect Wallet" />

          <Title>Please connect your wallet to access Verse Clicker</Title>

          <ConnectButton connectText="Connect Wallet" />
        </ConnectionWrapper>
      </Wrapper>
      <MoonImage src={halfMoon} alt="Verse Moon" />

      <Modal modalRef={modalRef}>
        <ModalContent>
          <Spinner />
          <Title>Loading...</Title>
          {error && (
            <>
              <Label $color="warning">{error}</Label>
              <Button
                $size="small"
                $design="secondary"
                onClick={() => {
                  disconnect();
                  close();
                  window.location.reload();
                }}
              >
                Close
              </Button>
            </>
          )}
          {!settings.sign?.signature && (
            <>
              <Label>YOU MUST VERIFY OWNERSHIP!</Label>
              <Button
                $size="small"
                $design="secondary"
                onClick={() => {
                  signMessage();
                }}
              >
                Proove it you!
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loading;
