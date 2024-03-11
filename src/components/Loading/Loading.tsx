import React, { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

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
  const { status, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { halfMoon } = useTheme();
  const dispatch = useDispatch();
  const { modalRef, showModal, close } = useModal();
  const { error, settings, isWallet } = useTrackedState();
  const [deviceUuid, setDeviceUuid] = useState(
    settings.sign[0]?.uuid || uuidv4(),
  );

  // use same uuid for same device to avoid confusion, if not, then use generated uuid
  const { data, signMessage } = useSignMessage({
    message: `I approve this device:  ${deviceUuid}`,
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
    dispatch({
      type: "ADD_SIGN_DATA_ELEMENT",
      payload: { signature: data, address, uuid: deviceUuid },
    });
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
          {!settings.sign?.find((signData) => address == signData.address) && (
            <>
              <Button
                onClick={() => {
                  signMessage();
                }}
              >
                Verify Ownership
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loading;
