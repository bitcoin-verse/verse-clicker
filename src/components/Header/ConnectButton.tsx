import { useWeb3Modal, useWeb3ModalEvents } from "@web3modal/wagmi/react";
import React, { FC, useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";

import bcomLogo from "../../assets/bcomconnect.png";
import mmLogo from "../../assets/mm-logo.png";
import wcLogo from "../../assets/wc-logo.png";
import { useTrackedState } from "../../context/store";
import truncateEthAddress from "../../helpers/truncateEthAddress";
import { Button as PrimaryButton } from "../Button";
import NetworkButton from "./NetworkButton";
import { AddressHolder, Button, ButtonContent, ConnectWrapper } from "./styled";

// wc:94d9ae8262410839ef7bd0b188df3d291e50c2affe6c02e5d2d75b547d02da18@2?relay-protocol=irn&symKey=2f90a1b39469e9618e284442367e442ec64224e59517036c4fc02feca5ef71b8

const ConnectButton: FC = () => {
  const { isWallet } = useTrackedState();
  const { open } = useWeb3Modal();
  const { data: web3ModalEvent } = useWeb3ModalEvents();

  const { address, isConnected, connector } = useAccount();
  const { data } = useEnsName({ address, chainId: 1 });

  const [providerLogo, setProviderLogo] = useState("");
  // TEMPORARY WORKAROUND UNTIL THIS IS RESOLVED
  // https://github.com/WalletConnect/web3modal/issues/1546
  useEffect(() => {
    if (web3ModalEvent.event === "CONNECT_ERROR") {
      location.reload();
    }
  }, [web3ModalEvent]);

  useEffect(() => {
    const getLogo = async () => {
      if (isWallet) {
        setProviderLogo(bcomLogo);
        return;
      }
      if (!connector) return;

      const provider = await connector?.getProvider();

      if (provider.isWalletConnect) {
        const { session } = provider;

        if (session?.peer?.metadata?.name?.includes("Bitcoin.com Wallet")) {
          setProviderLogo(bcomLogo);
          return;
        }

        setProviderLogo(session?.peer?.metadata?.icons?.[0] || wcLogo);
      }

      setProviderLogo(mmLogo);
    };

    getLogo();
  }, [connector]);

  if (!isConnected)
    return (
      <ConnectWrapper>
        <PrimaryButton
          $size="small"
          onClick={() => {
            // if (isWallet) {
            //   open();
            // } else {
            // }
            open({ view: "Networks" });
          }}
        >
          Connect Wallet
        </PrimaryButton>
      </ConnectWrapper>
    );

  return (
    <ConnectWrapper>
      <NetworkButton />
      <Button
        type="button"
        onClick={() => {
          open();
        }}
      >
        <ButtonContent $logo={providerLogo}>
          <AddressHolder>
            {data ? data : truncateEthAddress(address || "")}
          </AddressHolder>
        </ButtonContent>
      </Button>
    </ConnectWrapper>
  );
};

export default ConnectButton;
