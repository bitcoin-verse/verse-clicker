import React from "react";
import { useChainId } from "wagmi";
import { Button, ButtonContent } from "./styled";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { getNetworkImage } from "../../helpers/getNetworkImage";
import { useTrackedState } from "../../context/store";
import Christmas from "../Compaigns/Christmas";

const NetworkButton = () => {
  const chainId = useChainId();
  const { open } = useWeb3Modal();
  const { gameMode } = useTrackedState();

  if (gameMode === "Christmas") {
    return <Christmas isNetworkButton />;
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
