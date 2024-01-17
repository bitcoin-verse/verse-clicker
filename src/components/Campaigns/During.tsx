import React, { FC } from "react";
import { CURRENT_CAMPAIGN } from "src/constants";
import { useNetwork } from "wagmi";

import { useTrackedState } from "../../context/store";
import { CampaignInfo } from "../../hooks/useCampaignInfo";
import { Button } from "../Button";
import { H3 } from "../H3";
import { Label } from "../Label";
import LinkButton from "../LinkButton";
import { Text } from "../Text";
import { DuringCampaignJson } from "./types";

interface Props {
  playCampaign: () => void;
  switchChain: () => void;
  campaignInfo?: CampaignInfo;
  content: DuringCampaignJson;
}
const During: FC<Props> = ({
  playCampaign,
  switchChain,
  campaignInfo,
  content,
}) => {
  const { gameMode } = useTrackedState();
  const { chain } = useNetwork();

  return (
    <>
      <H3>{content.title}</H3>
      <Label>{content.label1}</Label>
      <Label $color="secondary">{content.label2}</Label>
      {campaignInfo && (
        <>
          <Text>
            {content.end} {new Date(campaignInfo.endDate).toLocaleString()}
          </Text>
        </>
      )}
      <LinkButton
        href="https://medium.com/@Bitcoin_Com/get-ready-for-clickmas-where-clicks-turn-to-rewards-1000-up-for-grabs-e87438a9772b"
        target="_blank"
      >
        {content.learnMore}
      </LinkButton>
      {gameMode === CURRENT_CAMPAIGN ? (
        <Button $fullWidth onClick={switchChain} $design="secondary">
          {content.back} {chain?.name}
        </Button>
      ) : (
        <Button $fullWidth onClick={playCampaign}>
          {content.play}
        </Button>
      )}
    </>
  );
};

export default During;
