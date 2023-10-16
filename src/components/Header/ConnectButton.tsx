import React, { FC } from "react";
import wcLogo from "../../assets/wc-logo.png";
import styled from "styled-components";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useAccount } from "wagmi";
import truncateEthAddress from "../../helpers/truncateEthAddress";

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

const ButtonContent = styled.div`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  border-radius: 2.25rem;
  height: 2.25rem;
  padding: 0.25rem;

  overflow: hidden;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    background-color: #3b99fc;
    background-image: url(${wcLogo});
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
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

const ConnectButton: FC = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  return (
    <ConnectWrapper>
      <Button
        type="button"
        onClick={() => {
          open();
        }}
      >
        <ButtonContent>
          <AddressHolder>{truncateEthAddress(address || "")}</AddressHolder>
        </ButtonContent>
      </Button>
    </ConnectWrapper>
  );
};

export default ConnectButton;
