import React, { FC } from "react";
import { useNetwork } from "wagmi";
import { useTrackedState } from "../../../context/store";

import { Button } from "../../Button";
import { H3 } from "../../H3";
import { Label } from "../../Label";

interface Props {
  playCampaign: () => void;
  switchChain: () => void;
}
const During: FC<Props> = ({ playCampaign, switchChain }) => {
  const { gameMode } = useTrackedState();
  const { chain } = useNetwork();

  return (
    <>
      <H3>🎉 Clickmas is Here! Join the Fun! 🎉</H3>
      <Label>$1000 Prize Pool 🤑</Label>
      <Label $color="secondary">
        The wait is over! Dive into the world of Verse Clicker, earn points, and
        win amazing rewards in VERSE. Ready, set, click!
      </Label>
      {gameMode === "Christmas" ? (
        <Button onClick={switchChain}>Switch to {chain?.name}</Button>
      ) : (
        <Button onClick={playCampaign}>🎮 Start Clicking</Button>
      )}
      <Button>📖 Learn more</Button>
    </>
  );
};

export default During;
