import React, { FC, useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useAccount, useEnsName } from "wagmi";
import { Button as PrimaryButton } from "../Button";

import truncateEthAddress from "../../helpers/truncateEthAddress";
import wcLogo from "../../assets/wc-logo.png";
import mmLogo from "../../assets/mm-logo.png";
import bcomLogo from "../../assets/bcomconnect.png";
import { useTrackedState } from "../../context/store";
import { AddressHolder, Button, ButtonContent, ConnectWrapper } from "./styled";
import NetworkButton from "./NetworkButton";

const ConnectButton: FC = () => {
  const { isWallet } = useTrackedState();
  const { open } = useWeb3Modal();
  const { address, isConnected, connector } = useAccount();
  const { data } = useEnsName({ address, chainId: 1 });

  const [providerLogo, setProviderLogo] = useState("");

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
