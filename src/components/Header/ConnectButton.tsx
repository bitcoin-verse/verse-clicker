import React, { FC, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

import bcomLogo from "../../assets/bcomconnect.png";
import mmLogo from "../../assets/mm-logo.png";
import wcLogo from "../../assets/wc-logo.png";
import { useTrackedState } from "../../context/store";
import truncateEthAddress from "../../helpers/truncateEthAddress";
import { Button as PrimaryButton } from "../Button";
import Modal, { useModal } from "../Modal";
import ConnectorsList from "./Connect/ConnectorsList";
import { getGameModeDetails } from "./Connect/GameModesList";
import { AddressHolder, Button, ButtonContent } from "./styled";

const ConnectButton: FC = () => {
  const { isWallet, gameMode } = useTrackedState();
  const { connectAsync, connectors } = useConnect();
  const { address, isConnected, connector } = useAccount();
  const { data } = useEnsName({ address, chainId: 1 });
  const { disconnect } = useDisconnect();
  const [providerLogo, setProviderLogo] = useState("");
  const { modalRef, showModal, close: closeModal } = useModal();

  // TEMPORARY WORKAROUND UNTIL THIS IS RESOLVED
  // https://github.com/WalletConnect/web3modal/issues/1546
  /*   useEffect(() => {
    if (web3ModalEvent.event === "CONNECT_ERROR") {
      location.reload();
    }
  }, [web3ModalEvent]); */

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

  useEffect(() => {
    connectors[0].on("message", (ev) => {
      if (
        ev.type === "display_uri" &&
        typeof ev.data === "string" &&
        isWallet
      ) {
        window.location.replace(`bitcoincom://wc?uri=${ev.data}`);
      }
    });
    return () => {
      connectors[0].off("message");
    };
  }, [connectors, isWallet]);

  return (
    <>
      {isConnected ? (
        <Button
          type="button"
          onClick={() => {
            // open();
            disconnect();
          }}
        >
          <ButtonContent $logo={providerLogo}>
            <AddressHolder>
              {data ? data : truncateEthAddress(address || "")}
            </AddressHolder>
          </ButtonContent>
        </Button>
      ) : (
        <PrimaryButton
          $size="small"
          onClick={async () => {
            try {
              if (isWallet) {
                const client = await connectAsync({
                  chainId: getGameModeDetails(gameMode)?.network,
                  connector: connectors[0],
                });

                console.log(client);
              } else {
                showModal();
              }
            } catch (error) {
              console.log("rrr", (error as Error).message);
            }
          }}
        >
          Connect Wallet
        </PrimaryButton>
      )}

      <Modal modalRef={modalRef} title="Connect Wallet" overlayClose>
        <ConnectorsList closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default ConnectButton;
