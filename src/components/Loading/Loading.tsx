import React, { FC, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { H1 } from "../H1";
import { H4 } from "../H4";
import { Link } from "../Link";
import {
  ConnectWalletImage,
  ConnectionWrapper,
  ContentsWrapper,
  ModalContent,
  MoonImage,
  Wrapper,
} from "./styled";
import { Title } from "../Title";
import { Button } from "../Button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import connectWallet from "../../assets/connect-wallet.png";
import halfMoon from "../../assets/half-moon.png";
import Modal, { useModal } from "../Modal";
import Spinner from "../Icons/Spinner";
import { useTrackedState } from "../../context/store";
import { Label } from "../Label";

const Loading: FC = () => {
  const { status } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  const { modalRef, showModal, close } = useModal();
  const { error } = useTrackedState();

  useEffect(() => {
    if (status === "connected") {
      showModal();
    }
  }, [status]);

  return (
    <>
      <Wrapper>
        <ContentsWrapper>
          <H1>Verse Clicker</H1>
          <H4 $secondary>
            Click for verse, climb the leaderboard! Join the Verse community and
            experience a world of endless clicking fun.
          </H4>
          <Link href="https://boo">Learn More</Link>
        </ContentsWrapper>
        <ConnectionWrapper>
          <ConnectWalletImage src={connectWallet} alt="Connect Wallet" />

          <Title>Please connect your wallet to access Verse Clicker</Title>
          <div>
            <Button
              size="small"
              onClick={() => {
                open();
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </ConnectionWrapper>
      </Wrapper>
      <MoonImage src={halfMoon} alt="Verse Moon" />

      <Modal
        modalRef={modalRef}
        onClose={() => {
          console.log("umm close");
        }}
      >
        <ModalContent>
          <Spinner />
          <Title>Loading...</Title>
          {error && (
            <>
              <Label style={{ color: "#C87A1E" }}>{error}</Label>
              <Button
                size="small"
                design="secondary"
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
