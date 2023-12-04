import React, { useEffect, useState } from "react";
import { useChainId } from "wagmi";
import { Button, ButtonContent } from "./styled";

import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { getNetworkImage } from "../../helpers/getNetworkImage";

const NetworkButton = () => {
  const chainId = useChainId();
  const { open, close } = useWeb3Modal();
  const { selectedNetworkId, open: isOpen } = useWeb3ModalState();

  const [networkChange, setNetworkChange] = useState<string>();

  useEffect(() => {
    if (isOpen && selectedNetworkId !== networkChange) {
      close();
    }
    if (!isOpen) {
      setNetworkChange(undefined);
    }
  }, [isOpen, selectedNetworkId]);

  return (
    <Button
      onClick={() => {
        setNetworkChange(selectedNetworkId);
        open({ view: "Networks" });
      }}
    >
      <ButtonContent
        $logo={getNetworkImage(chainId)}
        style={{
          background: `linear-gradient(180deg, #425472 0%, #313e57 100%)`,
        }}
      />
    </Button>
  );
};

export default NetworkButton;
