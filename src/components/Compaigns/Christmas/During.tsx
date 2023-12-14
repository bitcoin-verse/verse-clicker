import React, { FC } from "react";
import { useNetwork } from "wagmi";
import { useTrackedState } from "../../../context/store";

import { Button } from "../../Button";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import { LinkButton } from "../../LinkButton";
import { CampaignInfo } from "../../../hooks/useCampaignInfo";
import { Text } from "../../Text";

interface Props {
  playCampaign: () => void;
  switchChain: () => void;
  campaignInfo?: CampaignInfo;
}
const During: FC<Props> = ({ playCampaign, switchChain, campaignInfo }) => {
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
      {campaignInfo && (
        <>
          <Text>Ends: {new Date(campaignInfo.endDate).toLocaleString()}</Text>
        </>
      )}
      {gameMode === "Christmas" ? (
        <Button $fullWidth onClick={switchChain}>
          Switch to {chain?.name}
        </Button>
      ) : (
        <Button $fullWidth onClick={playCampaign}>
          🎮 Start Clicking
        </Button>
      )}
      <LinkButton>📖 Learn more</LinkButton>
    </>
  );
};

export default During;
