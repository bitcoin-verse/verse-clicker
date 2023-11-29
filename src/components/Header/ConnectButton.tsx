import React, { FC } from "react";
import styled from "styled-components";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useAccount, useEnsName } from "wagmi";
import { Button as PrimaryButton } from "../Button";

import truncateEthAddress from "../../helpers/truncateEthAddress";
import wcLogo from "../../assets/wc-logo.png";
import mmLogo from "../../assets/mm-logo.png";
import bcomLogo from "../../assets/bcomconnect.png";
import { useTrackedState } from "../../context/store";

const ConnectWrapper = styled.div`
  justify-self: flex-end;
  grid-area: connect;
  z-index: 1;
`;

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonContent = styled.div<{ $logo: string }>`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  border-radius: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;

  overflow: hidden;
  display: flex;
  align-items: center;

  &::after {
    content: "";

    background-image: url(${({ $logo }) => $logo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    background: linear-gradient(180deg, #0ebef0 0%, #0085ff 100%);
  }
`;

const AddressHolder = styled.div`
  display: none;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0em;
  text-align: left;
  margin: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const getConnectorLogo = (id?: string) => {
  switch (id) {
    case "injected":
      return mmLogo;
    case "bcom":
      return bcomLogo;
    case "walletConnect":
    default:
      return wcLogo;
  }
};

const ConnectButton: FC = () => {
  const { isWallet } = useTrackedState();
  const { open } = useWeb3Modal();
  const { address, isConnected, connector } = useAccount();
  const { data } = useEnsName({ address });

  if (!isConnected)
    return (
      <ConnectWrapper>
        <PrimaryButton
          $size="small"
          onClick={() => {
            open({ view: "Networks" });
          }}
        >
          Connect Wallet
        </PrimaryButton>
      </ConnectWrapper>
    );

  return (
    <ConnectWrapper>
      <Button
        type="button"
        onClick={() => {
          open();
        }}
      >
        <ButtonContent
          $logo={getConnectorLogo(isWallet ? "bcom" : connector?.id)}
        >
          <AddressHolder>
            {data ? data : truncateEthAddress(address || "")}
          </AddressHolder>
        </ButtonContent>
      </Button>
    </ConnectWrapper>
  );
};

export default ConnectButton;
