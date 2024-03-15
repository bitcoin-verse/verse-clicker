import React, { FC, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { verifyMessage } from "viem";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import connectWallet from "../../assets/connect-wallet.png";
import { useDispatch, useTrackedState } from "../../context/store";
import { getFirstUuid } from "../../helpers/getUuid";
import { Button } from "../Button";
import { H1 } from "../H1";
import { H2 } from "../H2";
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
  const { error, settings } = useTrackedState();

  const [deviceUuid] = useState(getFirstUuid(settings.sign));

  const message = `I approve this device:  ${deviceUuid}`;

  // use same uuid for same device to avoid confusion, if not, then use generated uuid
  const {
    data,
    signMessage,
    status: signStatus,
  } = useSignMessage({
    message,
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
    const verifySig = async () => {
      if (!address) return;

      if (!settings.sign[address]) return;
      const { signature } = settings.sign?.[address];

      const valid = await verifyMessage({
        address,
        message,
        signature: (signature || 0n) as `0x${string}`,
      });

      if (valid) {
        console.log("VALIDDDD");
      } else {
        dispatch({ type: "RESET_SIGN_DATA", payload: address });
      }
    };
    verifySig();
  }, [settings.sign]);

  useEffect(() => {
    if (!data) return;

    dispatch({
      type: "ADD_SIGN_DATA",
      payload: {
        signature: data,
        address: address || "",
        uuid: deviceUuid,
      },
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
          {!settings.sign[address || ""] ? (
            <>
              <H2>Verify Ownership</H2>
              <Label>
                Sign a message with your wallet to verify ownership of your
                account
              </Label>
            </>
          ) : (
            <Title>Loading...</Title>
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
                  window.location.reload();
                }}
              >
                Close
              </Button>
            </>
          )}
          {!settings.sign[address || ""] && (
            <>
              <Button
                onClick={() => {
                  signMessage();
                }}
                $size="small"
                disabled={signStatus === "loading"}
              >
                {signStatus === "loading"
                  ? "Confirm in wallet"
                  : "Sign request"}
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Loading;
