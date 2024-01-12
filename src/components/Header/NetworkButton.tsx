import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { useChainId } from "wagmi";

import { useTrackedState } from "../../context/store";
import { getNetworkImage } from "../../helpers/getNetworkImage";
import Campaign from "../Campaigns";
import { Button, ButtonContent } from "./styled";

const NetworkButton = () => {
  const chainId = useChainId();
  const { open } = useWeb3Modal();
  const { gameMode } = useTrackedState();

  if (gameMode === "Christmas") {
    return <Campaign isNetworkButton />;
  }

  return (
    <Button
      onClick={() => {
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
